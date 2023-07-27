import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  rooms: any;
  images: any;

  constructor(private activatedRoute: ActivatedRoute,
    private http: HttpClient, private router:Router
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params);
      
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

    this.http.get("https://hotel-ipd6.onrender.com/hotels/listing/"+ this.id).subscribe((res: any) => {
      // if(res.status === 200) {
        this.rooms = res;
  this.images = this.rooms.hotelImagesDto;
        console.log(this.rooms);
        console.log(this.rooms.length);
        console.log(this.images);
        
        
        
      // }
    })
  }
  showRooms(location: string) {
    this.router.navigateByUrl(`/listing/${location}`)
    
  }
  showHotel(location: number){
    this.router.navigateByUrl(`/book/${location}`)
  }
  signOut(){
    sessionStorage.clear()
    window.location.reload()
    this.router.navigate(['rooms'])
  }

}
