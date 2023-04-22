import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';
import { HoteladminComponent } from '../hoteladmin.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {
  user:any;
  hotellist:any=[]

  constructor(private builder: FormBuilder, private service: AuthService, private router: Router, private http:HttpClient) { 
  }
  
  addhotel = this.builder.group({
    "hotelname": this.builder.control('', Validators.required),
    "rating": this.builder.control('', Validators.required),
    "location": this.builder.control('', Validators.required),
    "price": this.builder.control('', Validators.required)
  });

  public getJSON(): Observable<any> {
    this.http.get("http://localhost:8080/hotels").subscribe(data=>{
      this.hotellist=data;
    });
    return this.http.get("http://localhost:8080/hotels");
  }

  adding() {
    if (this.addhotel.valid) {
      console.log(this.addhotel.value);
      this.service.addHotel(this.addhotel.value,).subscribe(result=> { 
        Swal.fire(
          'Thank you!',
          'Hotel added successfully!',
          'success'
        )
      });
    } else {
      alert('Please enter valid data.')
    }       
    this.router.navigate(['hoteladmin']);
  }

  ngOnInit(): void {
  }

}
