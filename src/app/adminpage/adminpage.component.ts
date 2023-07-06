import { Component , OnInit} from '@angular/core';
import { AddhotelService } from '../services/addhotel.service';
import { selfOnboarding } from '../modal/onboarding.modal';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ShowHotelImagesDialogComponent } from '../show-hotel-images-dialog/show-hotel-images-dialog.component';
import { ImageproccessingService } from '../services/imageproccessing.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  hotelDetails: selfOnboarding[]=[
    {id:0,name:'serena',location:'nairobi',pricing:20,no_of_beds:2,rooms_available:2,place:'kilimani',rating:2,description:"samcy",hotelImages:[]},
    {id:1,name:'serena',location:'nairobi',pricing:20,no_of_beds:2,rooms_available:2,place:'kilimani',rating:2,description:"samcy",hotelImages:[]},
    {id:2,name:'serena',location:'nairobi',pricing:20,no_of_beds:2,rooms_available:2,place:'kilimani',rating:2,description:"samcy",hotelImages:[]}
  ];
  displayedColumns: string[] = ['id',   'name',
  'location',
  'description',
  'pricing',
  'no_of_beds',
  'rooms_available',
  'place',
  'rating',
  'edit',
  'delete',
  'images'];



  constructor(private router:Router, private getHotel:AddhotelService , public imageDialog:MatDialog , private processing: ImageproccessingService){}


  ngOnInit(): void {
    this.getAllHotel();
    
  }

  // public getAllHotel(){
  //   this.getHotel.getAllHotel().subscribe(
  //     (resp:selfOnboarding[])=>{
  //       console.log(resp);
  //       this.hotelDetails=resp;
  //     },
  //     (error: HttpErrorResponse)=>{
  //       console.log(error);
  //     }
      
  //   );
  // }
  public getAllHotel(){
    this.getHotel.getAllHotel1()
    .pipe(
      map((x: selfOnboarding[], i)=>x.map((addhotel: selfOnboarding)=>this.processing.createImage(addhotel)))
    )
    .subscribe({
      next:(res: selfOnboarding[])=>{
        console.log(res);
        this.hotelDetails=res;
      },
     error: (err: HttpErrorResponse)=>{
        console.log(err)
      }
    })
  }

  deleteHotel(id: any){
   this.getHotel.deleteHotel(id).subscribe(
    (resp) => {
      alert("Deleted successfully");
      this.getAllHotel();
      console.log(resp)
    },
    (error: HttpErrorResponse)=>{
      console.log(error);
    }
   );

  }
  showImages(addhotel: selfOnboarding){
    console.log(addhotel);
    this.imageDialog.open(ShowHotelImagesDialogComponent, {
      data:{
        images: addhotel.hotelImages
      },
      height:'580px',
      width:'800px'
    });
  }

  editHotel(id:any){
    this.router.navigate(['/adminlist',{id:id}]);

  }

}
