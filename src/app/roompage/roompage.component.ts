import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-roompage',
  templateUrl: './roompage.component.html',
  styleUrls: ['./roompage.component.css']
})
export class RoompageComponent {
  title = 'testing-app';
  showDiv = {
    previous: false,
    current: true,
    next: false
  }
  toggle = true;
  status = 'Enable';

  constructor(private router: Router, private service:UserRegistrationService ){

  }

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
  showRooms(location: string) {
    console.log(this.service.sessionObject)
    if(this.service.sessionObject !== undefined){
        //do something here to check user permission for the location before showing rooms listings
        this.router.navigateByUrl(`/listing/${location}`)
    }else{
      this.router.navigate(['signuser'])
    }

   
  }
}
