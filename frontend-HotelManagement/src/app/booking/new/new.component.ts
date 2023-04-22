import { Component, Input, OnInit } from '@angular/core';
import { BookingService } from '../../app.service';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { BookComponent } from 'src/app/book/book.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  hotellist: any = [];
  constructor(private http: HttpClient,private matDialog: MatDialog) {
    this.getJSON().subscribe(data => {
        this.hotellist=data;
        console.log(data);
    });
}

  ngOnInit(): void {
  }
  public getJSON(): Observable<any> {
    this.http.get("http://localhost:8080/hotels").subscribe(data=>{
      this.hotellist=data;
    });
    return this.http.get("http://localhost:8080/hotels");
  }

  public booking(){

  }

  openModal(hotel:any) {
    this.matDialog.open(BookComponent, {
      "width": '2000px',
      "autoFocus": false,
      "data":hotel
    });
  
  }

}
