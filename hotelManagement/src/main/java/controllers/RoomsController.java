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
import models.Rooms;
import models.Staff;
import models.User;

import ninja.jpa.UnitOfWork;

import com.google.inject.Provider;

public class RoomsController {
    @Inject
    Provider<EntityManager> entityManagerProvider;
    
    public Result rooms() {
    	
    	EntityManager entityManager = entityManagerProvider.get();
        
        TypedQuery<Rooms> q = entityManager.createQuery("SELECT e FROM rooms e", Rooms.class);
        List rooms = q.getResultList(); 
		return Results.ok().json().render(rooms);
    }
    
    @Transactional
    public Result post_rooms(Rooms roomsD) {
    	try {
    	   	EntityManager entityManager = entityManagerProvider.get();
            entityManager.persist(roomsD);
            return Results.ok().json().render("Posted");
    	}
    	catch(Exception e) {
    		return Results.badRequest().json().render(e);
    	}

    }
    
    @Transactional
    public Result updateRoom(Booking obj) {
		EntityManager entityManager = entityManagerProvider.get();
    	    entityManager.merge(obj);
            return Results.ok().json().render("Updated");   
    	
    }
    
    @Transactional
    public Result deleteRoom(@PathParam("id") Long id) {
    	if(id!=null) {
    		EntityManager entityManager = entityManagerProvider.get();
            
            Rooms q = entityManager.find(Rooms.class, id);
            entityManager.remove(q);
            return Results.ok().json().render("Deleted");
    	}
    	return Results.ok().json().render("Id cannot be NULL");
    }

}