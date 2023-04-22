import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { NewComponent } from '../booking/new/new.component'; 
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
user?:any;

  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,@Inject(MAT_DIALOG_DATA) public data:any) { 
    console.log(this.data);
  }

  ngOnInit(): void {
    this.getUser();
  }
  
  bookingform = this.builder.group({
    "hotelname":this.data.hotelname,
    "name": this.builder.control('', Validators.required),
    "age": this.builder.control('', Validators.required),
    "phone": this.builder.control(''),
    "checkindate": this.builder.control('',Validators.required),    
    "checkoutdate": this.builder.control('',Validators.required)
  });

  proceedbooking() {
    if (this.bookingform.valid) {
      console.log(this.user.email);
      console.log(this.bookingform.value);
      this.service.bookHotel(this.bookingform.value,this.user.email).subscribe(result=> {
        // alert('Booking succesful')
        Swal.fire(
          'Thank you!',
          'Booking Succesfull!',
          'success'
        )
        this.router.navigate(['booking'])
      });
    } else {
      // alert('Please enter valid data.')
      Swal.fire({
        icon: 'error',
        title: 'Oops !',
        text: 'Please enter valid data'
      })
    }
  }

  // date2day(dateinput:any){
  //   const date=new Date(dateinput);  
  //   date.toString();
  //   date:"DD";
  //   return date;
  // }


  getUser(){
    this.service.getuser().subscribe((res)=>{
      this.user = res;
    });
  }

}
