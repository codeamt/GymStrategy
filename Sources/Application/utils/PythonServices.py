import uuid
import gym
import numpy as np
import six
import sys
import json
import logging


#######Error Handler############
class InvalidUsage(Exception):
    status_code = 400
    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv

############# Gym ENV Storage###############
class EnvStorage(object):
  def __init__(self):
    self.envs = {} #// envs['blockstack_id']['instance_id']

  def _lookup_env(self, blockstack_id, instance_id):
    try:
      return self.envs[blockstack_id][instance_id]
    except KeyError:
      raise InvalidUsage('Instance_id {} is not registered.'.format(instance_id))

  def add_env_for_user(self, blockstack_id, instance_id, instance):
    if str(blockstack_id) in self.envs:
      self.envs[str(blockstack_id)][str(instance_id)] = instance
    else:
      self.envs[str(blockstack_id)] = {}
      self.envs[str(blockstack_id)][instance_id] = instance


  def _remove_env(self, blockstack_id, instance_id):
    try:
      del self.envs[blockstack_id][instance_id]
    except KeyError:
      raise InvalidUsage('Instance_id {} is not registered.'.format(instance_id))



########Gym ENV Factory#############
class EnvFactory(object):
  def __init__(self):
    self.id_len = 8
    self.db = EnvStorage()

  def create(self, blockstack_id, env_id, seed=None):
    try:
      new_gym = gym.make(str(env_id))
      if seed:
        new_gym.seed(seed)
    except gym.error.Error:
      raise InvalidUsage("The submitted env_id '{}' is malformed. Please try again.".format(str(env_id))

    instance_id = str(uuid.uuid4().hex)[:self.id_len]
    self.db.add_env_for_user(blockstack_id, instance_id, new_gym)
    return instance_id

  def list_all_for_user(self, blockstack_id):
    return dict([(instance_id, env.spec.id) for (instance_id, env) in self.db.envs[blockstack_id].items()])

  def reset(self, blockstack_id, instance_id):
    env = self.db._lookup_env(blockstack_id, instance_id)
    obs = env.reset()
    return env.observation_space.to_jsonable(obs)

  def step(self, blockstack_id, instance_id, action, render):
    env = self.db._lookup_env(blockstack_id, instance_id)
    if isinstance(action, six.integer_types):
      nice_action = action
    else:
      nice_action = np.array(action)
    if render:
      env.render()
    [observation, reward, done, info] = env.step(nice_action)
    obs_json = env.observation_space.to_jsonable(observation)
    return [obs_json, reward, done, info]

  def get_action_space_contains(self, blockstack_id, instance_id, x):
    env = self.db._lookup_env(blockstack_id, instance_id)
    return env.action_space.contains(int(x))

  def get_action_space_info(self, blockstack_id, instance_id):
    env = self.db._lookup_env(blockstack_id, instance_id)
    return self._get_space_properties(env.action_space)

  def get_action_space_sample(self, blockstack_id, instance_id):
    env = self.db._lookup_env(blockstack_id, instance_id)
    action = env.action_space.sample()
    if isinstance(action, (list, tuple)) or ('numpy' in str(type(action))):
      try:
        action = action.to_list()
      except TypeError:
        print(type(action))
        print('TypeError')
    return action

  def get_observation_space_contains(self, blockstack_id, instance_id, j):
    env = self.db._lookup_env(blockstack_id, instance_id)
    info = self._get_space_properties(env.obs)
    for key, value in j.items():
      if json.dumps(info[key]) != json.dumps(value):
        print('Values for "{}" do not match. Passed "{}", Observed "{}".'.format(key, value, info[key]))
        return False
    return True


  def get_observation_space_info(self, blockstack_id, instance_id):
    env = self.db._lookup_env(blockstack_id, instance_id)
    return self._get_space_properties(env.observation_space)

  def _get_space_properties(self, space):
    info = {}
    info['name'] = space.__class__.__name__
    if info['name'] == 'Discrete':
      info['n'] = space.n
    elif info['name'] == 'Box':
      info['shape'] = space.shape
      info['low'] = [(x if x != -np.inf else -1e100) for x in np.array(space.low).flatten()]
      info['high'] = [(x if x != +np.inf else +1e100) for x in np.array(space.high).flatten()]
    elif info['name'] == 'HighLow':
      info['num_rows'] = space.num_rows
      info['matrix'] = [((float(x) if x != -np.inf else -1e100) if x != +np.inf else +1e100) for x in np.array(space.matrix).flatten()]
    return info

  def monitor_start(self, blockstack_id, instance_id, directory, force, resume, video_callable):
    env = self.db._lookup_env(blockstack_id, instance_id)
    if video_callable == False:
      v_c = lambda count: False
    else:
      v_c = lambda count: count % video_callable == 0
    self.db.envs[blockstack_id][instance_id] = gym.wrappers.Monitor(env, directory, force=force, resume=resume, video_callable=v_c)

  def monitor_close(self, blockstack_id, instance_id):
    env = self.db._lookup_env(blockstack_id, instance_id)
    env.close()

  def env_close(self, blockstack_id, instance_id):
    env = self.db._lookup_env(blockstack_id, instance_id)
    env.close()
    self.db._remove_env(blockstack_id, instance_id)




