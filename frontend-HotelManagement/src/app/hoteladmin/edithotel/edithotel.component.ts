import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';
import { HoteladminComponent } from '../hoteladmin.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edithotel',
  templateUrl: './edithotel.component.html',
  styleUrls: ['./edithotel.component.css']
})
export class EdithotelComponent implements OnInit {
  user:any;

  // , private hotels:HoteladminComponent
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,@Inject(MAT_DIALOG_DATA) private data:any) { 
  }
  
  edithotel = this.builder.group({
    "hotelname": this.builder.control(''),
    "rating": this.builder.control(''),
    "location": this.builder.control(''),
    "price": this.builder.control('')
  });
  edit() {
    const id=this.data.hotelid;
    if (this.edithotel.valid) {
      console.log(this.edithotel.value);
      this.service.edithotel(this.edithotel.value,id).subscribe(result=> {
        alert('Edited succesful')
        Swal.fire(
          'Thank you!',
          'Hotel edited successfully!',
          'success'
        )
        // this.hotels.getJSON();
        this.router.navigate(['hoteladmin'])
      });
    } else {
      alert('Please enter valid data.')
    }
  }

  ngOnInit(): void {
  }

}
