//
//  BlockstackUser.swift
//  Application
//
//  Created by AnnMargaret Tutu on 8/31/19.
//

import Foundation
import PythonKit 
import SwiftyJSON

public struct UserProfile:Codable {
    var username:String?
    var github_url:String?
}
public struct UserDashboard:Codable {
    
}
public struct UserSettings:Codable {}

public struct BlockstackUser:Codable {
    var blockstack_id:String
    var profile = UserProfile()
    var dashboard = UserDashboard()
    var settings = UserSettings()
    var instances:[String] = []
    
    init(_id:String) {
        self.blockstack_id = _id
    }
    
    func instances_to_json() -> JSON {
        let instances:JSON = JSON(self.instances)
        return instances
    }
}
