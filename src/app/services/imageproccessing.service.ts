import { Injectable } from '@angular/core';
import { selfOnboarding } from '../modal/onboarding.modal';
import { FileHandle } from '../modal/file-handle.modal';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageproccessingService {

  constructor(private sanitazer: DomSanitizer) { }

  public createImage(addhotel:selfOnboarding){
    const hotelImages: any[]=addhotel.hotelImages;
    const hotelImagesToFileHandle: FileHandle[]=[];

    for(let i=0; i<hotelImages.length; i++ ){
      const imageFileData = hotelImages[i];
       //picBytes and types comes from backend naming
      const imageBlob =this.dataURLtoBlob(imageFileData.image, imageFileData.description)
      // name and type naming should come from backend
      const imageFile=new File([imageBlob], imageFileData.hotel_id, {type:imageFileData.type});

      const finalFileHandle : FileHandle = {
        file: imageFile,
        url: this.sanitazer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };
      hotelImagesToFileHandle.push(finalFileHandle);
    }
    addhotel.hotelImages=hotelImagesToFileHandle;
    return addhotel;

  }
 
  public dataURLtoBlob(picBytes: any, imageType: any){
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for(let i=0; i<byteString.length; i++){
      int8Array[i]= byteString.charCodeAt(i);
    }
    const blob= new Blob([int8Array],{type :imageType});
    return blob;
  }
}
