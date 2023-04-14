import { Component } from '@angular/core';
import { AffPhotoComponent } from './aff-photo/aff-photo.component';
import { TyPhoto } from './models/photo.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

console=console;
  photoS!:TyPhoto[];
  // tabPhotoS!:TyPhoto[];

  ngOnInit(){
      this.photoS = [{ 
          name :'Grenoble',
          description : ' Prise de la bastille, vue des grands boulevards',
          createDate : new Date(),
          snap :12,
          liked:0,
          lienImage :"https://international.univ-grenoble-alpes.fr/medias/photo/grenoble-04_1595602761568-jpg?ID_FICHE=1173406"
        },
        {
          name :'Vizille',
          description : 'Le chateau de visite, promenade incontournable des dimanches en famille. rendez vous avec les canards et les truites ! ',
          createDate : new Date(),
          snap :12,
          liked:0,
          lienImage :"http://www.ginsteve-visiterhonealpesisere.com/medias/images/ch.teau.de.vizille.png?fx=r_720_406"
        },
        {
          name :'Romanche',
          description : 'encore bla bla ',
          createDate : new Date(),
          snap :12,
          liked:0,
          lienImage:"https://sinequanon4.fr/wp-content/uploads/2020/04/Romanche-1.jpg"
        },{ 
          name :'Notre Dame de Mésage',
          description :"Ma salle d'activité préférée : la mienne !!",
          createDate : new Date(),
          snap :12,
          liked:0,
          lienImage :"https://efficrea.fr/wp-content/uploads/2022/01/Lache-de-dentelliere-768x543.jpg"
        },{ 
          name :'Notre Dame de Mésage',
          description : ' Sweet home !!',
          createDate : new Date(),
          snap :12,
          liked:0,
          lienImage :"https://efficrea.fr/wp-content/uploads/2021/04/maison.jpg"
        },{ 
          name :'Notre Dame de Mésage',
          description : ' La mairie, le maire et les joyeux .',
          createDate : new Date(),
          snap :12,
          liked:0,
          lienImage :"https://www.notredamedemesage.fr/wp-content/uploads/2022/05/8-mai-avec-les-enfants.jpg"
        },{ 
          name :'Notre Dame de Mésage',
          description : ' Mon jardin et ses habitantes',
          createDate : new Date(),
          snap :12,
          liked:0,
          lienImage :"https://efficrea.fr/wp-content/uploads/elementor/thumbs/Exterieur-reduite-scaled-pivlh89szu7w0s53tn2eyhvjn98ov5x78jenitoxi8.jpg"
        },{ 
          name :'Grenoble',
          description : ' Le centre de formation WebForce3 de Grenoble et je commence à avoir le bout des doigts carré',
          createDate : new Date(),
          snap :12,
          liked:0,
          lienImage :"https://cdn.wf3.fr/wp-content/uploads/2023/03/1677769797804-e1678814490256-300x225.jpeg"
        },{ 
          name :'Grenoble',
          description : ' Prise de la bastille, vue des grands boulevards',
          createDate : new Date(),
          snap :12,
          liked:0,
          lienImage :"https://international.univ-grenoble-alpes.fr/medias/photo/grenoble-04_1595602761568-jpg?ID_FICHE=1173406"
        }]

    }
// Version sans tableau 
        // console=console;
        //   photo!:TyPhoto;
        //   ngOnInit(){
        //     this.photo = new TyPhoto ('Grenoble',' Prise de la bastille, vue des grand boulevard',new Date(), 12,0,"https://international.univ-grenoble-alpes.fr/medias/photo/grenoble-04_1595602761568-jpg?ID_FICHE=1173406")

}


