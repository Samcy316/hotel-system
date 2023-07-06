// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
// import { selfOnboarding } from '../modal/onboarding.modal';
// import { Observable } from 'rxjs/internal/Observable';

// @Injectable({
//   providedIn: 'root'
// })
// export class HotelResolveService implements Resolve<selfOnboarding>{

//   constructor() { }
//   resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):  Observable<selfOnboarding> {
//   const id =  route.paramMap.get("id");
//   if(id){
//     //then we fetch details from backend
//   } else{
//     //return empty empty observable
//     return this.getHotelDetails
//   }
//   }

//   getHotelDetails(){
//     return{
//       id:0,name:"",location:"",pricing:0,no_of_beds:0,rooms_available:0,place:"",rating:0,description:"",hotelImages:[],

//     }
//   }
// }
