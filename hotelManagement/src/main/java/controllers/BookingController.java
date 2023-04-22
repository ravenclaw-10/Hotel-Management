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

import java.sql.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import models.Booking;
import models.User;

import ninja.jpa.UnitOfWork;

import com.google.inject.Provider;


@Singleton 
public class BookingController {
    @Inject
    Provider<EntityManager> entityManagerProvider;
    
    @Transactional
    public Result booking(@PathParam("email") String email) {
    	
    	EntityManager entityManager = entityManagerProvider.get();
    	
    	System.out.println(email);
    	
    	if(email.equals("admin@gmail.com")) {
    		TypedQuery<Booking> q = entityManager.createQuery("SELECT b FROM booking_data b", Booking.class);
            List<Booking> booking = q.getResultList();
            return Results.ok().json().render(booking);
    	}
    	else {
    		TypedQuery<Booking> q = entityManager.createQuery("SELECT e FROM booking_data e where e.email=:email", Booking.class).setParameter("email", email);
            List<Booking> booking = q.getResultList();
            return Results.ok().json().render(booking);
    	}	
    }
    
    
    @Transactional
    public Result bookingPost(Booking booking, @PathParam("email") String email) {
    	try {
    	   	EntityManager entityManager = entityManagerProvider.get();
    	   	booking.email = email;
            entityManager.persist(booking);
            return Results.ok().json().render("Posted");
    	}
    	catch(Exception e) {
    		return Results.badRequest().json().render(e);
    	}

    }
    @Transactional
    public Result updateBooking(Booking obj, @PathParam("id") long id) {
		EntityManager em = entityManagerProvider.get();	
		obj.id=id;
    	em.merge(obj);
        return Results.ok().json().render("Updated");   
    	
    }
    
    @Transactional
    public Result deleteBooking(@PathParam("id") long id) {
    	System.out.println(id);
    	if(id != 0L) {
    		EntityManager entityManager = entityManagerProvider.get();
            
            Booking q = entityManager.find(Booking.class, id);
            entityManager.remove(q);
            return Results.ok().json().render("Deleted");
    	}
    	return Results.ok().json().render("id cannot be NULL");
    }

}


