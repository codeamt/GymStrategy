//
//  UserStore.swift
//  Application
//
//  Created by AnnMargaret Tutu on 8/31/19.
//

import Foundation
import PythonKit
import SwiftyJSON

public struct UserDB {
    var users:[String:BlockstackUser]
    
    init() {
        self.users = [:]
    }
    mutating func create_new_user(blockstack_id:String) -> BlockstackUser {
        let new_user = BlockstackUser(_id: blockstack_id)
        users[new_user.blockstack_id] = new_user
        return new_user
    }
    
    func look_up_user(blockstack_id:String) -> BlockstackUser {
        return users[blockstack_id]!
    }
    
    func get_all_users() -> [JSON] {
        var result:[JSON] = []
        for (_ , user) in self.users {
            let userJSON:JSON = [
                "blockstack_id": user.blockstack_id,
                "dashboard": user.dashboard,
                "instances": user.instances,
                "settings": user.settings
            ]
            result.append(userJSON)
        }
        return result
    }
    
    func get_user_profile(blockstack_id:String) -> UserProfile {
        let user = self.look_up_user(blockstack_id: blockstack_id)
        return user.profile
    }
    
    func get_user_settings(blockstack_id:String) -> UserSettings {
        let user = self.look_up_user(blockstack_id: blockstack_id)
        return user.settings
    }
    
    func get_user_dashboard(blockstack_id:String) -> UserDashboard {
        let user = self.look_up_user(blockstack_id: blockstack_id)
        return user.dashboard
    }
    
    func get_instances_for_user(blockstack_id:String) -> [String] {
        let user = self.look_up_user(blockstack_id: blockstack_id)
        let instances = user.instances
        var result:[String] = []
        for instance in instances {
            result.append(instance)
        }
        return result
    }
    
    func add_instance_for_user(blockstack_id:String, instance_id:String) {
        var user = self.look_up_user(blockstack_id: blockstack_id)
        user.instances.append(instance_id)
       
    }
}
