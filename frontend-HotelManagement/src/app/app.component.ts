import { Component, DoCheck } from '@angular/core';
import {FormGroup, FormControl,FormsModule, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  constructor(private builder: FormBuilder, private service: AuthService,
    private router: Router) {
      sessionStorage.clear();
      let role=sessionStorage.getItem('role');
    if(role=='admin'){
      this.isadmin=true;
    }
  }
  isadmin=false;
  isMenuVisible=false;
  
  ngDoCheck(): void {
    let currentroute = this.router.url;
    let role=sessionStorage.getItem('role');
    if (currentroute == '/' || currentroute == '/register' || currentroute == '/admin' || currentroute =='/bookingadmin' || currentroute =='/staffadmin' || currentroute =='/hoteladmin') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }

    if (role == 'admin') {
      this.isadmin = true;
    }else{
      this.isadmin = false;
    }
  }
  title = 'frontend-HotelManagement';

  
  result: any;

  loginform = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  proceedlogin() {
    if (this.loginform.valid) {
      
    } else {
      alert('Please enter valid data.')
    }
  }
  logout(){
    this.service.logout().subscribe((res)=>{
      console.log(res);
      Swal.fire(
        'Logged out successfully',
        'Thank you!',
        'success'
      )
      this.router.navigate(["/"]);
    });
    
    
  }

}
