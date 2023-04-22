package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

	@Entity(name = "staff_details")
	public class Staff {
	    
	    @Id
	    @GeneratedValue(strategy=GenerationType.AUTO)
	    public long id; 
		public String Name;
		public String Designation;
		public long Phone;
		
		public Staff() {
			
		}
		
		public Staff(String Name, String Designation, long Phone) {
			this.Name=Name;
			this.Designation=Designation;
			this.Phone=Phone;
		}

}
