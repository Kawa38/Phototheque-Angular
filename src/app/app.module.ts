import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AffPhotoComponent } from './aff-photo/aff-photo.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { ListePhotoComponent } from './liste-photo/liste-photo.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AffPhotoComponent,
    ListePhotoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [
    {provide:LOCALE_ID, useValue:'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {registerLocaleData(fr.default);}
}
