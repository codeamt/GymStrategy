//
//  UserDB.swift
//  Application
//
//  Created by AnnMargaret Tutu on 9/3/19.
//

import Foundation
import PythonKit

public class EnvDB {
    typealias BlockstackID = String
    typealias InstanceID = String
    typealias Sandbox = PythonObject
    
    var py_vault = PyObjectStorage()
    var swift_vault = SwiftGymStorage()
    
    func get_user_instance(_id:BlockstackID, instance_id:InstanceID) -> (PythonObject, GymInstance) {
        let py_inst = py_vault[dynamicMember: _id]?[instance_id]
        let swift_inst = swift_vault[dynamicMember: _id]?[instance_id]
        return (py_inst!, swift_inst!)
    }
    
    func add_instance_for_user(_id:BlockstackID, instance_id:InstanceID, instance:PythonObject!, swift_instance:GymInstance) -> Bool {
        let user_exists = py_vault[dynamicMember: _id] != nil
        if user_exists {
            do {
                var py_slot = py_vault[dynamicMember: _id]?[instance_id]
                py_slot = instance
                var swift_slot = swift_vault[dynamicMember: _id]?[instance_id]
                swift_slot = swift_instance
                if py_slot != nil && swift_slot != nil {
                    return true
                } else {
                    return false
                }
            }
        } else {
            do {
                var new_user = py_vault[dynamicMember: _id]!
                new_user[instance_id] = instance
                var new_swift_slot = swift_vault[dynamicMember: _id]!
                new_swift_slot[instance_id] = swift_instance
                return true
            }
        }
    }
    
    func remove_instance_for_user(_id:BlockstackID, instance_id:InstanceID) -> Bool {
        let user_exists = py_vault[dynamicMember: _id] != nil
        if user_exists {
            do {
               var user_envs_py =  self.py_vault[dynamicMember: _id]
               user_envs_py?[instance_id] = nil
                var user_envs_swift = self.swift_vault[dynamicMember: _id]
                user_envs_swift?[instance_id] = nil
                return true
            }
        } else {
            return false
        }
    }
    
    func update_instance_for_user(_id:BlockstackID, instance_id:InstanceID, instance:PythonObject!, swift_instance:GymInstance) -> Bool {
        let user_exists = py_vault[dynamicMember: _id] != nil && swift_vault[dynamicMember: _id] != nil
        if user_exists {
            do {
                var user_python_env = py_vault[dynamicMember: _id]?[instance_id]
                user_python_env = instance
                var user_swift_env = swift_vault[dynamicMember: _id]?[instance_id]
                user_swift_env = swift_instance
                if user_python_env != nil && user_swift_env != nil {
                    return true
                } else {
                    return false
                }
            }
        } else {
            return false
        }
    }
}
