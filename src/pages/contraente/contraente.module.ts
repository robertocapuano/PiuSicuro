import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContraentePage } from './contraente';

@NgModule({
  declarations: [
    ContraentePage,
  ],
  imports: [
    IonicPageModule.forChild(ContraentePage),
  ],
})
export class ContraentePageModule {}
