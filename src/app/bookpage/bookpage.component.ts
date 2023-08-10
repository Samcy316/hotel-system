import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit{
  files={
    url:"assets/images/room-2.jpg",
    url1:"assets/images/room-1.jpg",
    url2:"assets/images/room-3.jpg",
    url3:"assets/images/room-1.jpg"
  }
  id: any;
  rooms:any;
  wifistatus:any;
  barstatus:any;
  swimmingstatus: any;
  fitnessstatus: any;
  breakfaststatus: any;
  parkingstatus:any;
  constructor(private formBuilder:FormBuilder, private activateedRoute:ActivatedRoute, private http:HttpClient, private router:Router){}

  ngOnInit() {
    this.activateedRoute.params.subscribe((params:any)=>{
      console.log(params);
      if(typeof params.id!==undefined){
        this.id=params.id;
        console.log(this.id);
        

      }
    })
    this.getHotel();
    
  }
  getHotel(){
    let model ={
      id:this.id
    }
    this.http.get("https://hotel-ipd6.onrender.com/hotels/listing/get_hotel/"+ this.id).subscribe((res: any) => {
      // if(res.status === 200) {
        if(!res.hotelServicesDto.wifi){
          console.log("false")
          res.hotelServicesDto.wifi = this.wifistatus=false;
        }else{
          console.log("true")
          res.hotelServicesDto.wifi = this.wifistatus=true;
        }
        if(!res.hotelServicesDto.bar){
          console.log("false")
          res.hotelServicesDto.bar = this.barstatus=false;
        }else{
          console.log("true")
          res.hotelServicesDto.bar = this.barstatus=true;
        }
        if(!res.hotelServicesDto.swimming_pool){
          console.log("false")
          res.hotelServicesDto.swimming_pool = this.swimmingstatus=false;
        }else{
          console.log("true")
          res.hotelServicesDto.swimming_pool = this.swimmingstatus=true;
        }
        if(!res.hotelServicesDto.fitness_centre){
          console.log("false")
          res.hotelServicesDto.fitness_centre = this.fitnessstatus=false;
        }else{
          console.log("true")
          res.hotelServicesDto.fitness_centre = this.fitnessstatus=true;
        }
        if(!res.hotelServicesDto.breakfast){
          console.log("false")
          res.hotelServicesDto.breakfast = this.breakfaststatus=false;
        }else{
          console.log("true")
          res.hotelServicesDto.breakfast = this.breakfaststatus=true;
        }
        if(!res.hotelServicesDto.parking){
          console.log("false")
          res.hotelServicesDto.parking = this.parkingstatus=false;
        }else{
          console.log("true")
          res.hotelServicesDto.breakfast = this.parkingstatus=true;
        }
       
        this.rooms = res;
        console.log(this.rooms);
  })
}
bookHotel(){
  this.router.navigateByUrl('/booking',{state:{hotel:this.rooms}})
}

}
