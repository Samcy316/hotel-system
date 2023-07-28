import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { selfOnboarding } from '../modal/onboarding.modal';

@Injectable({
  providedIn: 'root'
})
export class AddhotelService {

  constructor(private http: HttpClient) { }
  apiUrl='http://localhost:3000/hoteldetails';
  public addHotel1(addhotel:FormData){
    return this.http.post<selfOnboarding>("http://localhost:3000/hoteldetails", addhotel);

  }
  public addHotel2(obj:any){
    return this.http.post("url",obj);
  }
  public getAllHotel1(){
    return this.http.get<selfOnboarding[]>("https://hotel-ipd6.onrender.com/hotels/listing/get_hotel/3");
  }
  public deleteHotel(id: number){
    return this.http.delete(`${this.apiUrl}${id}`)
  }

}
