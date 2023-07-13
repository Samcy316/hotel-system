import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  id: any;

  item = {
    name: "itemName",
    url: "https://placehold.co/600x400"
  }

  constructor(private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      if (typeof params.id !== undefined) {
        this.id = params.id;
        console.log(this.id);
      }
    })

    this.getAllRooms();
  }
  getAllRooms() {

    let model = {
      id: this.id
    }

    this.http.post("url", model).subscribe((res: any) => {
      if(res.status === 200) {

      }
    })
  }

}
