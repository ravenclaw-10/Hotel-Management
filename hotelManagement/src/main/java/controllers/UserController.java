package controllers;

import ninja.Context;

import ninja.Result;
import ninja.Results;
import ninja.params.Param;
import ninja.params.PathParam;
import ninja.session.Session;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import com.google.inject.Inject;
import com.google.inject.Provider;
import com.google.inject.persist.Transactional;

import dao.UserDao;
import models.Booking;
import models.Staff;
import models.User;
import ninja.Result;
import ninja.Results;

public class UserController {
	@Inject
    Provider<EntityManager> entityManagerProvider;
	
	@Inject
	UserDao userDao;
    
    public Result user() {
    	
    	EntityManager entityManager = entityManagerProvider.get();
        
        TypedQuery<User> q = entityManager.createQuery("SELECT e FROM User_data e", User.class);
        User users = q.getSingleResult(); 
		return Results.ok().json().render(users);
    }
    
    @Transactional
    public Result countAllUsers() {
    	long a = userDao.countAllUsers();
    	return Results.json().render(a);
    	
    }
    
    @Transactional
    public Result post_user(User userD, Session session) {
    	try {
    		session.clear();
    		session.put("email", userD.email);
    	   	User user = userDao.createUser(userD);
            return Results.json().render(user);
    	}
    	catch(Exception e) {
    		return Results.badRequest().json().render(e);
    	}

    }
    @Transactional
    public Result Login(@PathParam("email") String email , @PathParam("password") String password, Session session) {
    	EntityManager em = entityManagerProvider.get();
    	TypedQuery<User> q = em.createQuery("select u from User_data u where u.email=:email and u.password=:password",User.class);
    	List<User> user = q.setParameter("email", email).setParameter("password", password).getResultList();
    	if(user.size()!=0) {
    		session.clear();
    		User user1 = user.get(0);
    		session.put("email", user1.email);
    		return Results.json().render(user1);
    		
    	}
    	
    	return Results.badRequest().json().render("User doesn't exist");
    	
    	
    }
    @Transactional
    public Result logout(Session session) {
    	System.out.println("Hello Before Logout");
    	session.clear();
    	System.out.println("Hello After Logout");
    	boolean logout = true;
		return Results.json().render(logout);
    }
    
    @Transactional
    public Result updateUser(Booking obj) {
    	
		EntityManager entityManager = entityManagerProvider.get();
//    	    entityManager.merge(obj);
    	

    	boolean managed=entityManager.contains(obj);
    	System.out.println(managed);
    	Booking updatebooking= entityManager.merge(obj);
    	managed = entityManager.contains(obj);
    	System.out.println(managed);
    	
        return Results.ok().json().render("Updated");   
    	
    }
    
    public Result getUser(Context context) throws Exception {
        try{
            if(context.getSession()!=null){
                String email = context.getSession().get("email");
                User user = userDao.getUser(email);
                return Results.json().render(user);
            }
            else{
                return Results.unauthorized().json().render("Unauthorized");
            }

        }
        catch(Exception e){
            e.printStackTrace();
        }
        return Results.badRequest().json().render("Bad Request");

    }
    
    @Transactional
    public Result deleteUser(@PathParam("id") Long id) {
    	if(id!=null) {
    		EntityManager entityManager = entityManagerProvider.get();
            
            User q = entityManager.find(User.class, id);
            entityManager.remove(q);
            return Results.ok().json().render("Deleted");
    	}
    	return Results.ok().json().render("Id cannot be NULL");
    }
    

}
