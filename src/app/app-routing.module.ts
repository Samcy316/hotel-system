import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RoompageComponent } from './roompage/roompage.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { FirststepComponent } from './auth/firststep/firststep.component';
import { RestuarantComponent } from './restuarant/restuarant.component';
import { SignComponent } from './auth/sign/sign.component';
const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'rooms', component:RoompageComponent},
  {path:'listing/:id', component:ListingComponent},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'booking',component:BookingpageComponent},
  {path: 'admin', component:AdminpageComponent},
  {path:'adminlist', component:AdminlistComponent},
  {path:'firststep', component:FirststepComponent},
  {path:'restuarant', component:RestuarantComponent},
  {path:'signuser', component:SignComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
