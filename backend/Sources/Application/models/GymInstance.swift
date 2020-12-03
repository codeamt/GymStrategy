//
//  GymInstance.swift
//  Application
//
//  Created by AnnMargaret Tutu on 9/2/19.
//

import Foundation
import PythonKit
import SwiftyJSON

public struct GymInstance:Codable, JSONable {
    var blockstack_id:String
    var env_id:String
    public var json:JSON
    public var instance_id:String
    public var obs_space:JSON
    public var act_space:JSON
    
    init(blockstack_id:String, env_id:String, instance_id:String, instance:PythonObject) {
        self.blockstack_id = blockstack_id
        self.env_id = env_id
        self.instance_id = instance_id
        self.obs_space = JSON(instance.obsevation_space)
        self.act_space = JSON(instance.action_space)
        
        self.json = JSON([
            "blockstack_id": self.blockstack_id,
            "env_id": self.env_id,
            "instance_id": self.instance_id,
            "obs_space": self.obs_space,
            "act_space": self.act_space
            ])
        
    }
    
    public func to_json() -> JSON {
        return self.json
    }
    
}
