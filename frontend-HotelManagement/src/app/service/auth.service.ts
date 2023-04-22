import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  apiurl='http://localhost:8080/user';

  RegisterUser(inputdata:any){
    console.log(inputdata);
    return this.http.post(this.apiurl,inputdata)
  }

  Getall(){
    return this.http.get(this.apiurl);
  }
  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  GetAllCustomer(){
    return this.http.get('http://localhost:8080/user');
  }
  bookHotel(data:any,email:any){
    console.log(data);
    return this.http.post('http://localhost:8080/booking'+"/"+ email ,data,{withCredentials:true});
  }
  getUser(email:any,password:any){
    return this.http.get('http://localhost:8080/user' + "/" + email + '/' + password, { withCredentials: true });
  }
  logout(){
    console.log("Hello");
    return this.http.get('http://localhost:8080/users', {withCredentials:true});
  }
  getuser(){
    return this.http.get('http://localhost:8080/user',{ withCredentials: true });
  }
  addHotel(data:any){
    return this.http.post('http://localhost:8080/hotels',data);
  }

  edithotel(data:any,id:any){
    return this.http.put('http://localhost:8080/hotels/'+id,data);
  }

  editBooking(data:any, id:any){
    return this.http.put('http://localhost:8080/booking'+"/"+id,data);
  }
  
}
