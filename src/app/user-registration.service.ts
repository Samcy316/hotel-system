import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor( private http:HttpClient ) { }
  createHost(adminDto:any): Observable<any>{
    return this.http.post('http://localhost:3000/personalDetail',adminDto);
  }
  login(loginObj:any){
    return this.http.post<any>('http://localhost:3000/login',loginObj)
  }
  first(loginObj:any){
    return this.http.post('http://localhost:3000/createaccount', loginObj)
  }

}
