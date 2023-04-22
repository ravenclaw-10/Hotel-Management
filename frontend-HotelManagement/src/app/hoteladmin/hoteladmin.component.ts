import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { EdithotelComponent } from './edithotel/edithotel.component';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hoteladmin',
  templateUrl: './hoteladmin.component.html',
  styleUrls: ['./hoteladmin.component.css']
})
export class HoteladminComponent implements OnInit {

  hotellist: any = [];
  constructor(private http: HttpClient,private matDialog: MatDialog, private service: AuthService, private router:Router) {
    this.getJSON();
    
    this.matDialog.closeAll();
}

  ngOnInit(): void {
  }
  public getJSON(): Observable<any> {
    this.http.get("http://localhost:8080/hotels").subscribe(data=>{
      this.hotellist=data;
    });
    return this.http.get("http://localhost:8080/hotels");
  }

  public edit(hotels:any){
    this.matDialog.open(EdithotelComponent, {
      "width": '2000px',
      "autoFocus": false,
      "data":hotels
    });
  }

  // public del(hotels:any){
  //   return this.http.delete("http://localhost:8080/hotels"+"/"+hotels.hotelid,hotels).subscribe((ok)=>{
  //     Swal.fire(
  //       'Deleted Successfully!',
  //       'success'
  //     )
  //     this.getJSON();
  //   });
  // }


  public del(hotels:any){
    console.log(hotels.id);

    Swal.fire({
      title: 'Do you want to delete?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete("http://localhost:8080/hotels"+"/"+hotels.hotelid,hotels).subscribe((ok)=>{
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



  public add(){
    this.matDialog.open(AddhotelComponent, {
      "width": '2000px',
      "autoFocus": false
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
