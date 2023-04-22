import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { BookingComponent } from '../booking/booking.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})

// , public bookingc:BookingComponent
export class ConfirmComponent {
  constructor(public dialog: MatDialog,public router:Router,@Inject(MAT_DIALOG_DATA) public data:any) {
    console.log(this.data);
  }

  proceed(){
    // this.bookingc.del(this.data);
  }
  cancel(){
    this.router.navigate(['booking'])    
  }
}

