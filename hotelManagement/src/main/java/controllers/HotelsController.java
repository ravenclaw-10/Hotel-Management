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
import models.Hotels;
import models.Staff;
import models.User;

import ninja.jpa.UnitOfWork;

import com.google.inject.Provider;

public class HotelsController {
    @Inject
    Provider<EntityManager> entityManagerProvider;
    
    public Result hotels() {
    	
    	EntityManager entityManager = entityManagerProvider.get();
        
        TypedQuery<Hotels> q = entityManager.createQuery("SELECT e FROM hotels e", Hotels.class);
        List hotels = q.getResultList(); 
		return Results.ok().json().render(hotels);
    }
    
    @Transactional
    public Result post_hotels(Hotels hotelsD) {
    	try {
    	   	EntityManager entityManager = entityManagerProvider.get();
            entityManager.persist(hotelsD);
            return Results.ok().json().render("Posted");
    	}
    	catch(Exception e) {
    		return Results.badRequest().json().render(e);
    	}

    }
    
    @Transactional
    public Result updateHotel(Hotels obj,@PathParam("id") long id) {        
            
        EntityManager em = entityManagerProvider.get();
        obj.hotelid=id;
    	em.merge(obj);
    	
        return Results.ok().json().render("Updated"); 
    	
    }
    
    @Transactional
    public Result deleteHotel(@PathParam("id") Long id) {
    	if(id!=null) {
    		EntityManager entityManager = entityManagerProvider.get();
            
            Hotels q = entityManager.find(Hotels.class, id);
            entityManager.remove(q);
            return Results.ok().json().render("Deleted");
    	}
    	return Results.ok().json().render("Id cannot be NULL");
    }

}