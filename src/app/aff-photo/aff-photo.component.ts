import { Component,OnInit,Input } from '@angular/core';
import { TyPhoto } from '../models/photo.model';

@Component({
  selector: 'app-aff-photo',
  templateUrl: './aff-photo.component.html',
  styleUrls: ['./aff-photo.component.css']
})

export class AffPhotoComponent {
console = console;



// méthode liée au (click) sur le bouton
onLiked(){
  if (this.photoData.liked===0) {this.photoData.liked=1;this.photoData.snap ++;} 
  else 
  {this.photoData.liked===1;this.photoData.snap --; this.photoData.liked=0};
}

@Input () photoData!:TyPhoto;

// Version sans tableau
//   @Input () photoData!:TyPhoto;
}
