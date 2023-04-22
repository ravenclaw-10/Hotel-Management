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

package dao;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import models.User;

import ninja.jpa.UnitOfWork;

import com.google.inject.Inject;
import com.google.inject.Provider;


public class UserDao {
    
    @Inject
    Provider<EntityManager> entityManagerProvider;
    
    @UnitOfWork
    public boolean isUserAndPasswordValid(String username, String password) {
        
        if (username != null && password != null) {
            
            EntityManager entityManager = entityManagerProvider.get();
            
            TypedQuery<User> q = entityManager.createQuery("SELECT x FROM User_data x WHERE username = :usernameParam", User.class);
            User user = getSingleResult(q.setParameter("usernameParam", username));

            if (user != null) {
                
                if (user.password.equals(password)) {

                    return true;
                }
                
            }

        }
        
        return false;
 
    }
    
    public User createUser(User user) {
    	EntityManager em = entityManagerProvider.get();
    	User newUser = new User();
    	newUser.email = user.email;
    	newUser.password = user.password;
    	newUser.name = user.name;
    	newUser.gender = user.gender;
    	newUser.id = user.id;
    	em.persist(newUser);
    	System.out.println("User Is Successfully Registered");
    	return newUser;
    }
    
    public User getUser(String email) {
    	EntityManager em = entityManagerProvider.get();
    	TypedQuery<User> q = em.createQuery("SELECT x FROM User_data x WHERE x.email =:email",User.class).setParameter("email", email);
    	User user=q.getResultList().get(0);
    	return user;
    }
    
    
    public long countAllUsers() {
    	EntityManager em=entityManagerProvider.get();
    	long res = em.createNamedQuery("User.countAllUser",Long.class).getSingleResult();
    	return res;
    }
    
    
    

    /**
     * Get single result without throwing NoResultException, you can of course just catch the
     * exception and return null, it's up to you.
     */
    private static <T> T getSingleResult(TypedQuery<T> query) {
        query.setMaxResults(1);
        List<T> list = query.getResultList();
        if (list == null || list.isEmpty()) {
            return null;
        }

        return list.get(0);
    }

}
