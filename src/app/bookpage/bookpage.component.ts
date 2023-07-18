import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    
  }

}
