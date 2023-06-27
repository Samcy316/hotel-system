import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor( private http:HttpClient ) { }
  createHost(userObj:any): Observable<any>{
    return this.http.post('https://hotel-app-7pcg.onrender.com/user/create',userObj);
  }
  login(loginObj:any){
    return this.http.post<any>('https://hotel-app-7pcg.onrender.com/user/create',loginObj)
  }

}
