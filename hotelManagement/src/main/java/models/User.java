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

package models;

import javax.persistence.*;

@Entity(name = "User_data")
@NamedQueries({
	@NamedQuery(name="User.countAllUser",query = "Select count(*) from User_data")
})
public class User {
    
    @Id
    public String id;
    public String password;
    public String name;
    public String email;
    public String gender;
    
    public User() {}
    
    public User(String id, String password, String name,String email,String gender) {
    	this.id=id;
        this.password = password;
        this.name = name;
        this.email=email;
        this.gender=gender;
    }


 
}
