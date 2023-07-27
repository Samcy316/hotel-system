import { Component, OnInit } from '@angular/core';
import { selfOnboarding } from '../modal/onboarding.modal';
import { NgForm } from '@angular/forms';
import { AddhotelService } from '../services/addhotel.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FileHandle } from '../modal/file-handle.modal';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit{
  addhotel: selfOnboarding ={
    id:0,
    name: "",
    location: "",
    description: "",
    pricing: 0,
    no_of_beds:0,
    rooms_available:0,
    place:"",
    hotelImages:[],
    rating:0,
  }

  constructor(private addhotelservice:AddhotelService, private router:Router,
    
  private sanitizer: DomSanitizer ){}

  ngOnInit(): void {
    
  }
  addHotel(addhotelForm: NgForm){
    // console.log(this.addhotel);
    const hotelFormData = this.prepareFormData(this.addhotel);
    this.addhotelservice.addHotel1(hotelFormData).subscribe({
      next:(res)=>{
        alert("add successfull")
        this.router.navigate(['admin']);
        addhotelForm.reset();
        this.addhotel.hotelImages=[];
        
        
      },
      error:(err)=>{
        alert("error try again")
      }
    })
  }
  prepareFormData(addhotel:selfOnboarding): FormData{
    const formData= new FormData();
    formData.append(
      'images',
      new Blob([JSON.stringify(addhotel)], {type:'application/json'})
    );
    for(var i=0; i<addhotel.hotelImages.length; i++){
      formData.append(
        'description',
        addhotel.hotelImages[i].file,
        addhotel.hotelImages[i].file.name
      );
    }
    return formData;

  }

  onFileSelected(event:any){
    console.log(event);
    if (event.target.files){
     const file= event.target.files[0];


     const fileHandle:FileHandle={
      file:file,
      url:this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
     }
     this.addhotel.hotelImages.push(fileHandle);

    }
  }
  removeImage(i: number){
    this.addhotel.hotelImages.splice(i, 1);
  }
  finalPush(){
    this.addhotelservice.addHotel2(null).subscribe({
      next:(res)=>{
        alert("add successfull")
        this.router.navigate(['admin']);
  },
  error:(err)=>{
    alert("error try again")
  }
})
}
}
