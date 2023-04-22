import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:any;
  password:any;
  // static email: any;

  constructor(private builder: FormBuilder, private service: AuthService,
    private router: Router) {
      // sessionStorage.clear();

  }

  loginform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  proceedlogin() {
    this.email = this.loginform.value.email;
    this.password = this.loginform.value.password;
    console.log(this.email);
    this.service.getUser(this.email,this.password).subscribe((res)=>{
      console.log(res);

      if(!res){
        alert('Wrong Credentials');

        
      }
      else{
        if(this.loginform.valid && this.loginform.value.email=='admin@gmail.com'){
          this.router.navigate(['/admin']);
          }
          if(this.loginform.valid && this.loginform.value.email!='admin@gmail.com'){
          this.router.navigate(['/home']);
          }
          Swal.fire(
            'Logged in successfully',
            'Thank you!',
            'success'
          )
      }  

    })
    

  }
}