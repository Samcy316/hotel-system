import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router){

  }

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
  showRooms() {
    this.router.navigateByUrl(`/listing/${1}`)
  }
}
