//
//  core.swift
//  Application
//
//  Created by AnnMargaret Tutu on 9/4/19.
//

import Foundation
import PythonKit
import SwiftyJSON

public protocol JSONable {
    var json:JSON { get set }
    func to_json() -> JSON
    
}



