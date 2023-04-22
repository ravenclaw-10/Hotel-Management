package controllers;

import ninja.Context;
import ninja.Result;
import ninja.Results;
import ninja.params.Param;
import ninja.params.PathParam;
import ninja.session.Session;

import com.google.inject.Inject;
import com.google.inject.Singleton;
import com.google.inject.persist.Transactional;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import models.Booking;
import models.Staff;
import models.User;

import ninja.jpa.UnitOfWork;

import com.google.inject.Provider;

public class StaffDetailsController {
    @Inject
    Provider<EntityManager> entityManagerProvider;
    
    public Result staff_details() {
    	
    	EntityManager entityManager = entityManagerProvider.get();
        
        TypedQuery<Staff> q = entityManager.createQuery("SELECT e FROM staff_details e", Staff.class);
        List staffs = q.getResultList(); 
		return Results.ok().json().render(staffs);
    }
    
    @Transactional
    public Result post_staff_details(Staff staffsD) {
    	try {
    	   	EntityManager entityManager = entityManagerProvider.get();
            entityManager.persist(staffsD);
            return Results.ok().json().render("Posted");
    	}
    	catch(Exception e) {
    		return Results.badRequest().json().render(e);
    	}

    }
    
    @Transactional
    public Result updateStaff(Booking obj) {
		EntityManager entityManager = entityManagerProvider.get();
    	    entityManager.merge(obj);
            return Results.ok().json().render("Updated");   
    	
    }
    
    @Transactional
    public Result deleteStaff(@PathParam("id") Long id) {
    	if(id!=null) {
    		EntityManager entityManager = entityManagerProvider.get();
            
            Staff q = entityManager.find(Staff.class, id);
            entityManager.remove(q);
            return Results.ok().json().render("Deleted");
    	}
    	return Results.ok().json().render("Id cannot be NULL");
    }

}
