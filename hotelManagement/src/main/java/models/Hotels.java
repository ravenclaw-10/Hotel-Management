package models;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "hotels")
public class Hotels {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public long hotelid; 
    public String hotelname;    
	public String rating;
	public String location;
	public int price;
	public Hotels() {
		
	}
	
	public Hotels(String hotelname, String rating, String location,int roomavail,int price) {
		this.hotelname=hotelname;
		this.rating=rating;
		this.location=location;
		this.price=price;
	}
}
