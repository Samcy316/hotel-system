import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RoompageComponent } from './roompage/roompage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { HttpClientModule}from '@angular/common/http';
import { UserRegistrationService } from './user-registration.service';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {MatRadioModule} from '@angular/material/radio';
import { AdminpageComponent } from './adminpage/adminpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RoompageComponent,
    BookingpageComponent,
    ListingComponent,
    LoginComponent,
    SignupComponent,
    AdminpageComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule,

  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
