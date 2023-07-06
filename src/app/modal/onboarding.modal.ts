import { FileHandle } from "./file-handle.modal";

export interface selfOnboarding{
    id:number,
    name:string,
    location: string,
    description: string,
    pricing: number,
    no_of_beds:number,
    rooms_available:number,
    place:string,
    hotelImages:FileHandle[],
    rating:number,
}