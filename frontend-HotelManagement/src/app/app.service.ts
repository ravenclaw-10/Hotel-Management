import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class BookingService{
    url='http://localhost:8080/booking';
    constructor(private http:HttpClient){}
    getBooking(id:any){
        let urlGet=this.url+"/"+id;
        return this.http.get(urlGet);
    }
    saveBooking(data:any){
        console.log(data);
        return this.http.post(this.url, data, {withCredentials:false});
    }
    updateBooking(data:any){
        console.log(data);
        return this.http.put(this.url, data);
    }
}

export class StaffDetails{
    url='http://localhost:8080/staff';
    constructor(private http:HttpClient){}
    showDetails(){
        console.log(this.http.get(this.url));
        return this.http.get(this.url);
    }  
}