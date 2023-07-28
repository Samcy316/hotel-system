import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  sessionObject: any;

  constructor(private http: HttpClient) { }
  createHost(adminDto: any): Observable<any> {
    return this.http.post('https://hotel-ipd6.onrender.com/accounts/add_details', adminDto);
  }
  login(loginObj: any) {
    return this.http.post<any>('https://hotel-ipd6.onrender.com/accounts/login/user', loginObj);

  }
  
  loginAdmin(loginObj: any) {
    return this.http.post<any>('https://hotel-ipd6.onrender.com/accounts/login/admin', loginObj);
  }
  first(loginObj: any) {
    return this.http.post('https://hotel-ipd6.onrender.com/accounts/create_admin_account', loginObj,{observe: 'response'});
  }
  createUser(userSign: any): Observable<any> {
    return this.http.post("https://hotel-ipd6.onrender.com/accounts/create_user_account",userSign)
    
  }
  isLoggedin(){
   return localStorage.getItem('token')!=null;
  }

  sessionData(){
    const data = sessionStorage.getItem('data');
    if(data != null){
      return this.sessionObject = JSON.parse(data)
    }else{
      return this.sessionObject = null;
    }
  }
  

}
