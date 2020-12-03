import Foundation
import Kitura
import LoggerAPI
import Configuration
import CloudEnvironment
import KituraContracts
import Health
import SwiftyJSON

public let projectPath = ConfigurationManager.BasePath.project.path
public let health = Health()

public class App {
    let router = Router()
    let cloudEnv = CloudEnv()
    
    //user databases
    static var user_db = UserDB()
    
    //gym services setup
    private let env_library = EnvLibrary()
    private var gym_services = GymServices()
    static var database = EnvDB()
    
    //testing
    private var test_module = TestModule()

    public init() throws {
        // Run the metrics initializer
        initializeMetrics(router: router)
        if App.user_db.get_all_users().count == 0 {
            for test_user in self.test_module.test_users {
                print("creating seed user: \(test_user.blockstack_id)...")
                let created_test_user = App.user_db.create_new_user(blockstack_id: test_user.blockstack_id)
                print("Created test user \(created_test_user).")
            }
        }
    }

    func postInit() throws {
        // Endpoints
        initializeHealthRoutes(app: self)
        
        router.get("/") { _, response, next in
            response.send("The server is up and running.")
            next()
        }
        
        //GENERAL ENDPOINTS
        router.get("/api/v1/library") { request, response, next in
            //handler
            guard let userId = request.parameters["blockstack_id"],
                let blockstack_id = String?(userId) else {
                    let _ = response.send(status: .badRequest)
                    return next()
            }
            response.send(self.env_library.fetch_library(blockstack_id: blockstack_id))
            next()
        }
        
        router.get("/api/v1/library/:env_id") { request, response, next in
            //handler
            guard let userId = request.parameters["blockstack_id"],
                let env = request.parameters["env_id"],
                let blockstack_id = String?(userId),
                let env_id = String?(env) else {
                    let _ = response.send(status: .badRequest)
                    return next()
            }
            response.send(self.env_library.get_env_info(blockstack_id: blockstack_id, env_id: env_id))
            next()
        }
        
        // USER ENDPOINTS
        router.get("/api/v1/users/") { request, response, next in
            let community_list = App.user_db.get_all_users()
            response.send(community_list)
            next()
        }
        
        router.post("/api/v1/users/new") { request, response, next in
            //handler
            guard let userId = request.parameters["blockstack_id"],
                let blockstack_id = String?(userId) else {
                    let _ = response.send(status: .badRequest)
                    return next()
            }
            let user = App.user_db.create_new_user(blockstack_id: blockstack_id)
            response.send(user)
            next()
        }
        
        router.get("/api/v1/users/:blockstack_id/profile") { request, response, next in
            //handler
            guard let userId = request.parameters["blockstack_id"],
                let blockstack_id = String?(userId) else {
                    let _ = response.send(status: .badRequest)
                    return next()
            }
            response.send(App.user_db.get_user_profile(blockstack_id: blockstack_id))
            next()
        }
        
        router.get("/api/v1/users/:blockstack_id/settings") { request, response, next in
            //handler
            guard let userId = request.parameters["blockstack_id"],
                let blockstack_id = String?(userId) else {
                    let _ = response.send(status: .badRequest)
                    return next()
            }
            response.send(App.user_db.get_user_settings(blockstack_id: blockstack_id))
            next()
        }
        
        router.get("/api/v1/users/:blockstack_id/home") { request, response, next in
            //handler
            guard let userId = request.parameters["blockstack_id"],
                let blockstack_id = String?(userId) else {
                    let _ = response.send(status: .badRequest)
                    return next()
            }
            response.send(App.user_db.get_user_dashboard(blockstack_id: blockstack_id))
            next()
        }
        
        
        /// INSTANCE ENDPOINTS
        router.get("/api/v1/:blockstack_id/envs") { request, response, next in
            //handler
            guard let userId = request.parameters["blockstack_id"],
                let blockstack_id = String?(userId) else {
                    let _ = response.send(status: .badRequest)
                    return next()
            }
            let user_instances = App.user_db.get_instances_for_user(blockstack_id: blockstack_id)
        
            response.send(user_instances)
            next()
        }
        
        func newEnvHandler(instance:GymInstance, completion: (String?, RequestError?) -> Void) {
            let new_instance = self.gym_services.create(blockstack_id: instance.blockstack_id, env_id: instance.env_id)
            completion(String(new_instance), nil)
        }
        router.post("/api/v1/envs/new/", handler: newEnvHandler)
    
        
        router.get("/api/v1/:blockstack_id/envs/:instance_id") { request, response, next in
            //handler
            guard let userId = request.parameters["blockstack_id"],
                let instance = request.parameters["instance_id"],
                let blockstack_id = String?(userId),
                let instance_id = String?(instance) else {
                    let _ = response.send(status: .badRequest)
                    return next()
            }
            let playground = App.user_db.look_up_user(blockstack_id: blockstack_id).instances
            response.send(playground)
            next()
        }
        
        router.post("/api/v1/:blockstack_id/envs/:instance_id/reset") { request, response, next in
            //handler
            guard let userId = request.parameters["blockstack_id"],
                let instance = request.parameters["instance_id"],
                let blockstack_id = String?(userId),
                let instance_id = String?(instance) else {
                    let _ = response.send(status: .badRequest)
                    return next()
            }
            let observation = self.gym_services.reset(blockstack_id: blockstack_id, instance_id: instance_id)
            response.send(observation)
            next()
        }
        
        router.post("/api/v1/:blockstack_id/envs/:instance_id/step") { request, response, next in
            //handler
            guard let userId = request.parameters["blockstack_id"],
                let instance = request.parameters["instance_id"],
                let visual = request.parameters["render"],
                let blockstack_id = String?(userId),
                let instance_id = String?(instance),
                let render = Bool(visual) else {
                    let _ = response.send(status: .badRequest)
                    return next()
            }
            let step_result = self.gym_services.step(blockstack_id: blockstack_id, instance_id: instance_id, render: render)
            response.send(step_result)
            next()
        }
        
        router.post("/api/v1/:blockstack_id/envs/:instance_id/monitor_start") { request, response, next in
            //handler
            guard let userId = request.parameters["blockstack_id"],
                let instance = request.parameters["instance_id"],
                let dir = request.parameters["directory"],
                let f = request.parameters["force"],
                let r = request.parameters["resume"],
                let video = request.parameters["v_c"],
                let blockstack_id = String?(userId),
                let instance_id = String?(instance),
                let directory = String?(dir),
                let force = Bool(f),
                let resume = Bool(r), let v_c = Bool(video) else {
                    let _ = response.send(status: .badRequest)
                    return next()
            }
            let started = self.gym_services.start_monitor(blockstack_id: blockstack_id, instance_id: instance_id, directory: directory, force: force, resume: resume, v_c: v_c)
            response.send(started)
            next()
        }
        
        router.post("/api/v1/:blockstack_id/envs/:instance_id/monitor_pause") { request, response, next in
            //handler
            guard let userId = request.parameters["blockstack_id"],
                let instance = request.parameters["instance_id"],
                let blockstack_id = String?(userId),
                let instance_id = String?(instance) else {
                    let _ = response.send(status: .badRequest)
                    return next()
            }
            let pause = self.gym_services.shutdown_monitor(blockstack_id: blockstack_id, instance_id: instance_id)
            response.send(pause)
            next()
        }
        
        router.post("/api/v1/:blockstack_id/envs/:instance_id/delete") { request, response, next in
            //handler
            guard let userId = request.parameters["blockstack_id"],
                let instance = request.parameters["instance_id"],
                let blockstack_id = String?(userId),
                let instance_id = String?(instance) else {
                    let _ = response.send(status: .badRequest)
                    return next()
            }
            let deleted = self.gym_services.delete_instance(blockstack_id: blockstack_id, instance_id:instance_id)
            response.send(deleted)
            next()
        }
    }

    public func run() throws {
        try postInit()
        Kitura.addHTTPServer(onPort: cloudEnv.port, with: router)
        Kitura.run()
    }
}
