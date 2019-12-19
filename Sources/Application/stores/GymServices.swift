//
//  PlaygroundStore.swift
//  Application
//
//  Created by AnnMargaret Tutu on 8/31/19.
//

import Foundation
import PythonKit 
import SwiftyJSON

public struct GymServices {
    let gym:PythonObject!
    let six:PythonObject!
    let json:PythonObject!
    let uuid:PythonObject!
    let np:PythonObject!
    let sys:PythonObject!
    let gym_factory:PythonObject?
    var database:EnvDB

    
    init() {
        //latest version of python
        PythonLibrary.useVersion(3, 7)
        sys = Python.import("sys")
        let srcroot = (ProcessInfo.processInfo.environment["SRCROOT"] ?? "unwrapped")
        sys.path.append(srcroot + "/Sources/Application/utils/")
        sys.path.insert(0, srcroot + "/Sources/Application/conda4swiftserver/lib/python3.7/site-packages/")
        //python pip imports
        gym = Python.import("gym")
        six = Python.import("six")
        json = Python.import("json")
        //hack for uuid: conda had issues
        uuid = Python.import("uuid")
        np = Python.import("numpy")
        let py_services = Python.import("PythonServices")
        //self.swift_vault = [:]
        self.gym_factory = py_services.EnvFactory()
        self.database = EnvDB()
    }
    
    public func create(blockstack_id:String, env_id:String, seed:Int?) -> String {
        let gym = Python.import("gym")
        let uuid = Python.import("uuid")
        let py_instance = gym.make(PythonObject(stringLiteral: env_id))
        if seed != nil {
            py_instance.seed(PythonObject(integerLiteral: seed!))
        }
        let instance_id = String?((uuid.uuid4().hex()).prefix(8))
        let swift_instance = GymInstance(blockstack_id: blockstack_id, env_id: env_id, instance_id: instance_id, instance:py_instance)
        self.database.add_instance_for_user(_id: blockstack_id, intance_id: instance_id, instance: py_instance, swift_instance: swift_instance)
        return instance_id
    }
    
    public func reset(blockstack_id:String, instance_id:String) -> JSON {
        let instances:(PythonObject, GymInstance) = self.database.get_user_instance(_id: blockstack_id, instance_id: instance_id)
        let obs = instances.0.reset()
        let observation_json = instances.0.observation_space.to_jsonable(obs)
        return JSON(observation_json)
    }
    
    
    public func step(blockstack_id:String, instance_id:String, render:Bool) -> JSON {
        
        let instances:(PythonObject, GymInstance) = self.database.get_user_instance(_id: blockstack_id, instance_id: instance_id)
        //sample action space
        let rand_action = instances.0.action_space.sample()
        _ = Python.builtins
        var sampled_action:PythonObject
        if String(Python.type(rand_action))!.contains("numpy") || String(Python.type(rand_action))!.contains("tuple") {
            sampled_action = rand_action.tolist()
        } else if String(Python.type(rand_action))! == "int" {
            sampled_action = rand_action
        } else {
            print(Python.type(rand_action), " TypeError")
        }
        
        //handle rendering
        if render {
            instances.0.render()
        }
        
        let step_result = instances.0.step(sampled_action)
        let observation_json = instances.0.observation_space.to_jsonable(step_result[0])
        
        let result_array:JSON = [
            "observation": observation_json,
            "reward": step_result[1],
            "done": step_result[2],
            "info": step_result[3]
        ]
        return result_array
    }
    
    func get_observation_space(blockstack_id:String, instance_id:String) -> JSON {
        let instances:(PythonObject, GymInstance) = self.database.get_user_instance(_id: blockstack_id, instance_id: instance_id)
        return instances.1.obs_space
    }
    
    func get_action_space(blockstack_id:String, instance_id:String) ->JSON {
        let instances:(PythonObject, GymInstance) = self.database.get_user_instance(_id: blockstack_id, instance_id: instance_id)
        return instances.1.act_space
    }
    
    func get_space_properties(space:PythonObject) -> JSON {
        let np = Python.import("numpy")
        var info:[String:PythonObject] = [:]
        info["name"] = space.__class__.__name__
        if String(info["name"]!)! == "Discrete" {
            info["n"] = space.n
        } else if String(info["name"]!)! == "Box" {
            info["low"] = PythonObject([Int]())
            info["high"] = PythonObject([Int]())
            for x in np.array(space.low).flatten() {
                if x ==  -np.inf {
                    info["low"]!.append(-1e100)
                } else {
                    info["low"]!.append(x)
                }
            }
            
            for x in np.array(space.high).flatten() {
                if x ==  +np.inf {
                    info["high"]!.append(1e100)
                } else {
                    info["high"]!.append(x)
                }
            }
            
        } else if String(info["name"]!)! == "HighLow" {
            info["num_rows"] = space.num_rows
            info["matrix"] = PythonObject([Float]())
            for x in np.array(space.matrix).flatten() {
                if x == -np.inf {
                    info["matrix"]!.append(-1e100)
                } else if x == +np.inf {
                    info["matrix"]!.append(1e100)
                }
                else {
                    info["matrix"]!.append(Float(x)!)
                }
            }
        }
        return JSON(info)
    }
    

    func observation_space_contains(blockstack_id:String, instance_id:String, query:PythonObject) -> Bool {
        let instances:(PythonObject, GymInstance) = self.database.get_user_instance(_id: blockstack_id, instance_id: instance_id)
        
        let response = Bool(instances.0.observation_space.contains(query))
        return response
    }
    
    func action_space_contains(blockstack_id:String, instance_id:String, query:PythonObject) -> Bool {
        let instances:(PythonObject, GymInstance) = self.database.get_user_instance(_id: blockstack_id, instance_id: instance_id)
        let response = Bool(instances.0.action_space.contains(query))
        return response
    }
    
    func sample_action_space(blockstack_id:String, instance_id:String) -> JSON {
        let instances:(PythonObject, GymInstance) = self.database.get_user_instance(_id: blockstack_id, instance_id: instance_id)
        let action = instances.0.action_space.sample()
        let response:JSON = ["action": action]
        return response
    }
    
    func delete_instance(blockstack_id:String, instance_id:String) -> String {
        let instances = self.database.get_user_instance(_id: blockstack_id, instance_id: instance_id)
        if instances.1 != nil {
            let removed = self.database.remove_instance_for_user(_id: blockstack_id, instance_id: instance_id)
            if removed {
                return "Instance '\(instance_id)' has been removed from your playgrounds."
            } else {
                return "Something went wrong with removing Instance '\(instance_id)'."
            }
        } else {
            return "Instance '\(instance_id)' does not exist."
        }
    }
    
    func start_monitor(blockstack_id:String, instance_id:String, directory:String, force:Bool, resume:Bool, v_c:Bool) -> String {
        let instances = self.database.get_user_instance(_id: blockstack_id, instance_id: instance_id)
        let vc_final:PythonObject
        if v_c == false  {
            vc_final = { (count:Bool) -> Bool in return (false) }
        } else {
            vc_final = { (count:Int) -> Int in return (count % v_c == 0)}
        }
        let new_instance = gym.wrappers.Monitor(instances.0, directory, force, resume, vc_final )
        let monitor_started = self.database.update_instance_for_user(_id: blockstack_id, instance_id: instance_id, instance: new_instance, swift_instance: instances.1)
        if monitor_started {
            return "Monitor running..."
        } else {
            return "Could not start monitor."
        }
    }
    
    func shutdown_monitor(blockstack_id:String, instance_id:String) -> String {
       let instances = self.database.get_user_instance(_id: blockstack_id, instance_id: instance_id)
        instances.0.close()
        return "Monitor shutting down..."
    }

}
