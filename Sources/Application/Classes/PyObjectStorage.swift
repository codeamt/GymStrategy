//
//  PyObjectStorage.swift
//  Application
//
//  Created by AnnMargaret Tutu on 9/3/19.
//

import Foundation
import PythonKit

@dynamicMemberLookup
public class PyObjectStorage {
    var vault:[String:Dictionary<String, PythonObject>]
    public init() {
        self.vault = [:]
    }
    subscript(dynamicMember key:String) -> Dictionary<String, PythonObject>! {
        return vault[key]
    }
    
    subscript(dynamicMember key:String, key2:String) -> PythonObject! {
        return vault[key]?[key2]
    }
}
