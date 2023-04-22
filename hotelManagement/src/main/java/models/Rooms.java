package models;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "rooms")
public class Rooms {
	
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public String hotelname;    
	public String roomtype;
	public int price;
	public int availability;
	public Rooms() {
		
	}
	
	public Rooms(String hotelname, String roomtype, int price, int availability) {
		this.hotelname=hotelname;
		this.roomtype=roomtype;
		this.price=price;
		this.availability=availability;
	}
}