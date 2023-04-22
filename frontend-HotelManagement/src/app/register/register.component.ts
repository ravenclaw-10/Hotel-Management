import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  static email:any;

  constructor(private builder: FormBuilder, private service: AuthService, private router: Router, private http: HttpClient) {

  }

  registerform = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.builder.control('male')
  });


  proceedregister() {
    if (this.registerform.valid) {
      console.log(this.registerform.value);
      this.http.post("http://localhost:8080/user",this.registerform.value,{withCredentials:true}).subscribe((data)=>{
        console.log(data);
      });

      if(this.registerform.valid){
        this.router.navigate(['/']);
      }
      Swal.fire(
        'Registered successfully',
        'Thank you!',
        'success'
      )
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter valid data !'
      })
    }
  }
  ngOnInit(): void {
  }

}
