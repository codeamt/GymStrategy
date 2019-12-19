//
//  GymLibrary.swift
//  Application
//
//  Created by AnnMargaret Tutu on 8/31/19.
//

import Foundation
import PythonKit
import SwiftyJSON


public struct EnvLibrary {
    var json:JSON = [
        //prototype
        "CartPole-v0": [
            "category": "Classic Control",
            "description": "A pole is attached by an un-actuated joint to a cart, which moves along a frictionless track. The pendulum starts upright, and the goal is to prevent it from falling over by increasing and reducing the cart's velocity." ,
            "img_url": "https://user-images.githubusercontent.com/8510097/31701291-3b9f3d94-b384-11e7-8ee1-70fb1e7deb63.PNG",
            "available": "True"
        ],
        "Pendulum-v0": [
            "category": "Classic Control",
            "description": "Try to keep a frictionless pendulum standing up." ,
            "img_url": "https://user-images.githubusercontent.com/8510097/31701471-726f54c0-b385-11e7-9f05-5c50f2affbb4.PNG",
            "available": "True"
        ],
        "MountainCarContinuous-v0": [
            "category": "Classic Control",
            "description": "An underpowered car must climb a one-dimensional hill to reach a target. Unlike MountainCar v0, the action (engine force applied) is allowed to be a continuous value.The target is on top of a hill on the right-hand side of the car. If the car reaches it or goes beyond, the episode terminates. On the left-hand side, there is another hill. Climbing this hill can be used to gain potential energy and accelerate towards the target. On top of this second hill, the car cannot go further than a position equal to -1, as if there was a wall. Hitting this limit does not generate a penalty (it might in a more challenging version)." ,
            "img_url": "https://user-images.githubusercontent.com/8510097/31701297-3ebf291c-b384-11e7-8289-24f1d392fb48.PNG",
            "available": "True"
        ],
        "LunarLander-v2": [
            "category": "Box2D",
            "description": "Landing pad is always at coordinates (0,0). Coordinates are the first two numbers in state vector. Reward for moving from the top of the screen to landing pad and zero speed is about 100..140 points. If lander moves away from landing pad it loses reward back. Episode finishes if the lander crashes or comes to rest, receiving additional -100 or +100 points. Each leg ground contact is +10. Firing main engine is -0.3 points each frame. Solved is 200 points. Landing outside landing pad is possible. Fuel is infinite, so an agent can learn to fly and then land on its first attempt. Four discrete actions available: do nothing, fire left orientation engine, fire main engine, fire right orientation engine." ,
            "img_url": "https://user-images.githubusercontent.com/8510097/31702728-c2b8db88-b38d-11e7-8d1e-d15450303bdd.PNG",
            "available": "True"
        ],
        "LunarLanderContinuous-v2": [
            "category": "Box2D",
            "description": "Landing pad is always at coordinates (0,0). Coordinates are the first two numbers in state vector. Reward for moving from the top of the screen to landing pad and zero speed is about 100..140 points. If lander moves away from landing pad it loses reward back. Episode finishes if the lander crashes or comes to rest, receiving additional -100 or +100 points. Each leg ground contact is +10. Firing main engine is -0.3 points each frame. Solved is 200 points. Landing outside landing pad is possible. Fuel is infinite, so an agent can learn to fly and then land on its first attempt. Action is two real values vector from -1 to +1. First controls main engine, -1..0 off, 0..+1 throttle from 50% to 100% power. Engine can't work with less than 50% power. Second value -1.0..-0.5 fire left engine, +0.5..+1.0 fire right engine, -0.5..0.5 off." ,
            "img_url": "https://user-images.githubusercontent.com/8510097/31702728-c2b8db88-b38d-11e7-8d1e-d15450303bdd.PNG",
            "available": "True"
        ],
        "BipedalWalker-v2": [
            "category": "Box2D",
            "description": "Hardcore version with ladders, stumps, pitfalls. Time limit is increased due to obstacles. Reward is given for moving forward, total 300+ points up to the far end. If the robot falls, it gets -100. Applying motor torque costs a small amount of points, more optimal agent will get better score. State consists of hull angle speed, angular velocity, horizontal speed, vertical speed, position of joints and joints angular speed, legs contact with ground, and 10 lidar rangefinder measurements. There's no coordinates in the state vector." ,
            "img_url": "https://user-images.githubusercontent.com/8510097/31704513-996d6a56-b396-11e7-8a05-5bd45b35d352.PNG",
            "available": "True"
        ],
        "CarRacing-v0": [
            "category": "Box2D",
            "description": "Easiest continuous control task to learn from pixels, a top-down racing environment. Discreet control is reasonable in this environment as well, on/off discretisation is fine. State consists of 96x96 pixels. Reward is -0.1 every frame and +1000/N for every track tile visited, where N is the total number of tiles in track. For example, if you have finished in 732 frames, your reward is 1000 - 0.1*732 = 926.8 points. Episode finishes when all tiles are visited. Some indicators shown at the bottom of the window and the state RGB buffer. From left to right: true speed, four ABS sensors, steering wheel position, gyroscope." ,
            "img_url": "https://user-images.githubusercontent.com/8510097/31704419-298c707e-b396-11e7-8858-b9041db8198e.PNG",
            "available": "False"
        ],
        "Walker2d-v1": [
            "category": "MuJoCo",
            "description": "Make a two-dimensional bipedal robot walk forward as fast as possible.Walker2d-v1 is an unsolved environment, which means it does not have a specified reward threshold at which it's considered solved." ,
            "img_url": "https://user-images.githubusercontent.com/8510097/31702336-36cd4606-b38b-11e7-9b59-4d5018de8572.PNG",
            "available": "False"
        ],
        "Walker2d-v2": [
            "category": "MuJoCo",
            "description": "Make a two-dimensional bipedal robot walk forward as fast as possible." ,
            "img_url": "https://user-images.githubusercontent.com/8510097/31702336-36cd4606-b38b-11e7-9b59-4d5018de8572.PNG",
            "available": "False"
        ],
        "Ant-v1": [
            "category": "MuJoCo",
            "description": "Make a four-legged creature walk forward as fast as possible. Ant-v1 defines 'solving' as getting average reward of 6000.0 over 100 consecutive trials." ,
            "img_url": "https://user-images.githubusercontent.com/8510097/31752126-30384f76-b43e-11e7-94b9-2b32b52abe85.PNG",
            "available": "False"
        ],
    ]
    
    func update_library(updates:JSON) {}
    
    func fetch_library(blockstack_id:String) -> JSON {
        return self.json
    }
    
    func get_env_info(blockstack_id:String, env_id:String) -> JSON {
        return self.json[env_id]
    }
}
