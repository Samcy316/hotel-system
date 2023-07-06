import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileHandle } from '../modal/file-handle.modal';
@Component({
  selector: 'app-show-hotel-images-dialog',
  templateUrl: './show-hotel-images-dialog.component.html',
  styleUrls: ['./show-hotel-images-dialog.component.css']
})
export class ShowHotelImagesDialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
   this.receiveImage(); 
  }
  receiveImage(){

    console.log(this.data);
  }

 

}
