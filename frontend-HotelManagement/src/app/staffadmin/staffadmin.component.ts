import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-staffadmin',
  templateUrl: './staffadmin.component.html',
  styleUrls: ['./staffadmin.component.css']
})
export class StaffadminComponent implements OnInit {

  staff: any = [];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
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

public edit(staffs:any){
  console.log(staffs.id);
}

public del(staffs:any){
  console.log(staffs.id);
  return this.http.delete("http://localhost:8080/booking"+"/"+staffs.id,staffs).subscribe((ok)=>{console.log(ok)});
}

public add(staffs:any){
  console.log(staffs.id);
}

}
