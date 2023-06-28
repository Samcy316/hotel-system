import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RoompageComponent } from './roompage/roompage.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'rooms', component:RoompageComponent},
  {path:'listing', component:ListingComponent},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'booking',component:BookingpageComponent},
  {path: 'admin', component:AdminpageComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
