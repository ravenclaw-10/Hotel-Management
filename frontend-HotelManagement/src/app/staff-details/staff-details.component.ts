import { Component, OnInit } from '@angular/core';
import { StaffDetails } from '../app.service';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  staff: any = [];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        // document.write(data);
        this.staff=data;
        console.log(data);
    });
}

  ngOnInit(): void {
  }
  
  public getJSON(): Observable<any> {
    this.http.get("http://localhost:8080/staff").subscribe(data=>{
      this.staff=data;
    });
    return this.http.get("http://localhost:8080/staff");
}

    

}
