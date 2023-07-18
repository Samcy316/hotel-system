import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hotelBooking } from '../modal/userBooking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }
  public bookingService(hotelBook:hotelBooking){
    return this.http.post<hotelBooking>("http://localhost:3000/bookingHotel", hotelBook)
  }
}
