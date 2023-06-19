import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RoompageComponent } from './roompage/roompage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingpageComponent } from './bookingpage/bookingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RoompageComponent,
    BookingpageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
