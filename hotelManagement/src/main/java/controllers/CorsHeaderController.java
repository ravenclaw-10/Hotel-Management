package controllers;

import ninja.Result;
import ninja.Results;

public class CorsHeaderController {
	public Result allowCors() {
		return Results.ok().json().render("key","value");
	}

}
