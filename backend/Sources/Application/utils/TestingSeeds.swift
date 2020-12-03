//
//  TestingSeeds.swift
//  Application
//
//  Created by AnnMargaret Tutu on 8/31/19.
//

import Foundation
import PythonKit
import SwiftyJSON

public struct TestModule {
    public var test_users:[BlockstackUser]
    
    init() {
        let user1 = BlockstackUser(_id: "test_user1.id")
        let user2 = BlockstackUser(_id: "test_user2.id")
        self.test_users = [user1, user2]
    }
    
    func get_sample_instances_for_users() {
        
    }
}
