package controllers;

import com.google.inject.Inject;

import dao.UserDao;
import models.User;
import ninja.Result;
import ninja.Results;
import ninja.session.Session;

public class RegisterController {
	
	@Inject
	public UserDao userDao;
	
	public Result create(User user, Session session) {
		session.clear();
		if(user.email!=null && user.password!=null) {
			session.put("email", user.email);
			User res = userDao.createUser(user);
			return Results.json().render(res);
		}
		
		return Results.badRequest().json().render("Bad Request");
	}
}


