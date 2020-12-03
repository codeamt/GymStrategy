//
//  SwiftObjectStorage.swift
//  Application
//
//  Created by AnnMargaret Tutu on 9/13/19.
//

import Foundation
import PythonKit

public class SwiftGymStorage {
    var vault:[String:Dictionary<String, GymInstance>]
    public init() {
        self.vault = [:]
    }
    subscript(dynamicMember key:String) -> Dictionary<String, GymInstance>! {
        return vault[key]
    }
    
    subscript(dynamicMember key:String, key2:String) -> GymInstance! {
        return vault[key]?[key2]
    }
}
