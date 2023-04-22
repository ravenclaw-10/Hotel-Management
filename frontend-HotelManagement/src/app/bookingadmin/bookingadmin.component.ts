import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { UpdateComponent } from '../booking/update/update.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookingadmin',
  templateUrl: './bookingadmin.component.html',
  styleUrls: ['./bookingadmin.component.css']
})
export class BookingadminComponent implements OnInit {

  booking: any = [];
  constructor(private builder: FormBuilder, private service: AuthService,
    private router: Router,private http: HttpClient, private matDialog: MatDialog)  {
    this.getJSON().subscribe(data => {
        // document.write(data);
        this.booking=data;
        console.log(data);
    });
}

  ngOnInit(): void {
  }

  public getdate(Gdate:any){
    const date=new Date(Gdate);  
    date.toString();
    return date;
  }

  public getJSON(): Observable<any> {
    this.http.get("http://localhost:8080/booking/"+"admin@gmail.com").subscribe(data=>{
      this.booking=data;
    });
    return this.http.get("http://localhost:8080/booking"+"/"+"admin@gmail.com");
  }

  // public del(bookings:any){
  //   console.log(bookings.id);
  //   return this.http.delete("http://localhost:8080/booking"+"/"+bookings.id,bookings).subscribe((ok)=>{
  //     console.log(ok)
  //     this.getJSON();
  
  // });
  // }

  public del(bookings:any){
    console.log(bookings);
    console.log(bookings.id);

    Swal.fire({
      title: 'Do you want to Delete?',
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



  public edit(bookings:any){
    console.log(bookings);
    this.matDialog.open(UpdateComponent, {
      "width": '2000px',
      "autoFocus": false,
      "data":bookings
    });
    this.getJSON();
  }

  logout(){
    this.service.logout().subscribe((res)=>{
      console.log(res);
      this.router.navigate(["/"]);
    });
  }
}
