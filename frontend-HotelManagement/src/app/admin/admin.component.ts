import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private builder: FormBuilder, private service: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.service.logout().subscribe((res)=>{
      console.log(res);
      this.router.navigate(["/"]);
    });
  }
}
