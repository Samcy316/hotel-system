import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { selfOnboarding } from '../modal/onboarding.modal';

@Injectable({
  providedIn: 'root'
})
export class AddhotelService {

  constructor(private http: HttpClient) { }
  public addHotel1(addhotel:FormData){
    return this.http.post<selfOnboarding>("https://hotel-ipd6.onrender.com/admin/host", addhotel);

  }
  public getAllHotel1(){
    return this.http.get<selfOnboarding[]>("https://hotel-ipd6.onrender.com/hotels/listing/get_hotel/3");
  }
  public deleteHotel(id: number){
    return this.http.delete(" http://localhost:3000/hoteldetails"+id)
  }

}
