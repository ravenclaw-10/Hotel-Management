import { Component, OnInit,Inject } from '@angular/core';
import { BookingService } from '../../app.service';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookingComponent } from '../booking.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  user:any

  // ,private bookingS:BookingComponent
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,@Inject(MAT_DIALOG_DATA) public data:any) {
    console.log(this.data.email);
   }

  booking=new FormGroup({
    roomtype: new FormControl(''),
    persons:new FormControl()
  });

  ngOnInit(): void {
  }
  
  bookingform = this.builder.group({
    "email":this.data.email,
    "hotelname":this.data.hotelname,
    "name": this.builder.control('', Validators.required),
    "age": this.builder.control('', Validators.required),
    "phone": this.builder.control(''),
    "checkindate":this.builder.control(''),
    "checkoutdate":this.builder.control('')
  });

  editbooking() {
    if (this.bookingform.valid) {
      console.log(this.bookingform.value);
      this.service.editBooking(this.bookingform.value,this.data.id).subscribe(result=> {
        Swal.fire(
          'Thank you!',
          'Edited Succesfully !',
          'success'
        )
        this.router.navigate(['bookingadmin'])
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
}
