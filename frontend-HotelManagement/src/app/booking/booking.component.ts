import { Component, OnInit } from '@angular/core';
import { BookingService } from '../app.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { MatDateFormats } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
 

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  // email=LoginComponent.email;
  user:any;
  email:any;

  ngOnInit(): void {    
    this.getUser();
  }

  booking: any = [];
  constructor(private http: HttpClient, private service: AuthService, private matDialog: MatDialog) {
  
}
  // date: Date = new Date();  
  public getdate(Gdate:any){
    const date=new Date(Gdate);  
    date.toString();
    return date;
  }

  check:boolean=false;

  time: number = Date.now();
  
  condition(date:any){
    if(date>this.time){
      return true;
    }
    return false;
  }

  public getJSON(): Observable<any> {
    console.log(this.user.email);
    this.http.get("http://localhost:8080/booking"+"/"+this.email).subscribe(data=>{
      this.booking=data;
    });
    return this.http.get("http://localhost:8080/booking"+"/"+this.user.email);
  }

  public del(bookings:any){
    console.log(bookings.id);

    Swal.fire({
      title: 'Do you want to delete?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete("http://localhost:8080/booking"+"/"+bookings.id,bookings).subscribe((ok)=>{
        Swal.fire(
          'Thank you!',
          'Booking deleted Succesfully!',
          'success'
        )
        this.getJSON();
      });

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
  }

  getUser(){
    this.service.getuser().subscribe((res)=>{
      this.user = res;
      this.email = this.user.email;
      this.getJSON();
    });
  }
}