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
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RoompageComponent,
    BookingpageComponent,
    ListingComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
