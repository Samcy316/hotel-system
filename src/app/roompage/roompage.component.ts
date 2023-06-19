import { Component } from '@angular/core';

@Component({
  selector: 'app-roompage',
  templateUrl: './roompage.component.html',
  styleUrls: ['./roompage.component.css']
})
export class RoompageComponent {
  title = 'testing-app';
  showDiv = {
    previous : true,
    current : false,
    next : false
  }
}
