package models;

import java.sql.Date;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.time.format.DateTimeFormatter;  
import java.time.LocalDateTime;  

@Entity(name = "booking_data")
public class Booking {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    public long id; 
    public String hotelname; 
	public String name;
	public String email;
	public int age;
	public Date checkindate;
	public Date checkoutdate;
	public long phone;
	public Booking() {
		
	}
	
	public Booking(String hotelname, String email, String name, int age, long phone,Date checkindate, Date checkoutdate) {
		this.hotelname=hotelname;
		this.name=name;
		this.email=email;
		this.age=age;
		this.phone=phone;
		this.checkindate=checkindate;
		this.checkoutdate=checkoutdate;
	}
}

