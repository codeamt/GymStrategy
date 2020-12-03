//
//  Gym.swift
//  Application
//
//  Created by AnnMargaret Tutu on 9/4/19.
//

import Foundation
import PythonKit
import SwiftyJSON

public class GymEnvironment:JSONable {
    public var env_id:String
    public var description:String
    public var image:String
    
    public var json: JSON {
        get { let copy = JSON(self.json); return copy }
        set { self.json = JSON(newValue)}
    }
    init(env_id:String, description:String, image:String) {
        self.env_id = env_id
        self.description = description
        self.image = image
        self.json = JSON(self)
    }
    

    public func to_json() -> JSON {
        return self.json 
    }
    
    public func fork(blockstack_id:String) -> GymInstance {
        let fork = GymInstance(blockstack_id: blockstack_id, env_id: self.env_id)
        return fork
    }
}
