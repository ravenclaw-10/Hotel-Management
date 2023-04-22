/**
 * Copyright (C) the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright (C) 2012-2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package conf;

import ninja.AssetsController;

import ninja.Router;
import ninja.application.ApplicationRoutes;
import ninja.utils.NinjaProperties;

import com.google.inject.Inject;

import controllers.ApiController;
import controllers.ApplicationController;
import controllers.ArticleController;
import controllers.BookingController;
import controllers.CorsHeaderController;
import controllers.HotelsController;
import controllers.LoginLogoutController;
import controllers.RoomsController;
import controllers.StaffDetailsController;
import controllers.UserController;

public class Routes implements ApplicationRoutes {
    
    @Inject
    NinjaProperties ninjaProperties;

    /**
     * Using a (almost) nice DSL we can configure the router.
     * 
     * The second argument NinjaModuleDemoRouter contains all routes of a
     * submodule. By simply injecting it we activate the routes.
     * 
     * @param router
     *            The default router of this application
     */
    @Override
    public void init(Router router) {  
        
        // puts test data into db:
        if (!ninjaProperties.isProd()) {
            router.GET().route("/setup").with(ApplicationController::setup);
        }
        

        router.OPTIONS().route("/.*").with(CorsHeaderController::allowCors);
        router.OPTIONS().route("/").with(CorsHeaderController::allowCors);
        router.OPTIONS().route("/*").with(CorsHeaderController::allowCors);
        
        router.GET().route("/").with(ApplicationController::index);
        
        router.GET().route("/booking/{email}").with(BookingController::booking);
        router.POST().route("/booking/{email}").with(BookingController::bookingPost);
        router.DELETE().route("/booking/{id}").with(BookingController::deleteBooking);
        router.PUT().route("/booking/{id}").with(BookingController::updateBooking);
        
        router.GET().route("/staff").with(StaffDetailsController::staff_details);
        router.POST().route("/staff").with(StaffDetailsController::post_staff_details);
        router.DELETE().route("/staff/{id}").with(StaffDetailsController::deleteStaff);
        router.PUT().route("/staff").with(StaffDetailsController::updateStaff);
        router.GET().route("/userCount").with(UserController::countAllUsers);
        

        router.GET().route("/hotels").with(HotelsController::hotels);
        router.POST().route("/hotels").with(HotelsController::post_hotels);
        router.DELETE().route("/hotels/{id}").with(HotelsController::deleteHotel);
        router.PUT().route("/hotels/{id}").with(HotelsController::updateHotel);
        

        router.GET().route("/rooms").with(RoomsController::rooms);
        router.POST().route("/rooms").with(RoomsController::post_rooms);
        router.DELETE().route("/rooms/{id}").with(RoomsController::deleteRoom);
        router.PUT().route("/rooms").with(RoomsController::updateRoom);
        
       
        
//        router.GET().route("/user/{id}").with(UserController::getUser);
        
        
        router.POST().route("/user").with(UserController::post_user);
        router.GET().route("/user/{email}/{password}").with(UserController::Login);
        router.GET().route("/users").with(UserController::logout);
        
        
        router.DELETE().route("/user/{id}").with(UserController::deleteUser);
        router.PUT().route("/user").with(UserController::updateUser);
        
        
        router.GET().route("/user/{email}").with(UserController::getUser);
        
        router.GET().route("/user").with(UserController::getUser);
        
        
        ///////////////////////////////////////////////////////////////////////
        // Login / Logout
        ///////////////////////////////////////////////////////////////////////
        router.GET().route("/login").with(LoginLogoutController::login);
        router.POST().route("/login").with(LoginLogoutController::loginPost);
        router.GET().route("/logout").with(LoginLogoutController::logout);
        
        ///////////////////////////////////////////////////////////////////////
        // Create new article
        ///////////////////////////////////////////////////////////////////////
//        router.GET().route("/article/new").with(ArticleController::articleNew);
//        router.POST().route("/article/new").with(ArticleController::articleNewPost);
        
        ///////////////////////////////////////////////////////////////////////
        // Create new article
        ///////////////////////////////////////////////////////////////////////
//        router.GET().route("/article/{id}").with(ArticleController::articleShow);

        ///////////////////////////////////////////////////////////////////////
        // Api for management of software
        ///////////////////////////////////////////////////////////////////////
//        router.GET().route("/api/{username}/articles.json").with(ApiController::getArticlesJson);
//        router.GET().route("/api/{username}/article/{id}.json").with(ApiController::getArticleJson);
////        router.GET().route("/api/{username}/articles.xml").with(ApiController::getArticlesXml);
//        router.POST().route("/api/{username}/article.json").with(ApiController::postArticleJson);
//        router.POST().route("/api/{username}/article.xml").with(ApiController::postArticleXml);
// 
        ///////////////////////////////////////////////////////////////////////
        // Assets (pictures / javascript)
        ///////////////////////////////////////////////////////////////////////    
        router.GET().route("/assets/webjars/{fileName: .*}").with(AssetsController::serveWebJars);
        router.GET().route("/assets/{fileName: .*}").with(AssetsController::serveStatic);
        
        ///////////////////////////////////////////////////////////////////////
        // Index / Catchall shows index page
        ///////////////////////////////////////////////////////////////////////
        
        router.GET().route("/.*").with(ApplicationController::index);
    }

}
