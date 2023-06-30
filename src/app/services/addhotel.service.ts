import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { selfOnboarding } from '../modal/onboarding.modal';

@Injectable({
  providedIn: 'root'
})
export class AddhotelService {

  constructor(private http: HttpClient) { }
  public addHotel1(addhotel:FormData){
    return this.http.post<selfOnboarding>("https://hotel-ipd6.onrender.com/admin/CreateHotel", addhotel);

  }

}
