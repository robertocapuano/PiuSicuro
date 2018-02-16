import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContraentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contraente',
  templateUrl: 'contraente.html',
})
export class ContraentePage {
  
  @Input()
  contraente : Persona;
  @Input()
  disabilitato : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public servizo : CreaPreventivoProviders) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContraentePage');
  }

  formValida()
  {
    if(
      this.contraente.nome !== null &&
      this.contraente.cognome !== null &&
      this.contraente.dataDiNascita !== null &&
      this.contraente.luogoDiNascita !== null &&
      this.contraente.anniPatente !== null
    )
      this.disabilitato=true;
  }
  navigateToGaranzia(){
    console.log("navigaaaaaaa puoi!!!");
    this.servizo.setPersona(this.contraente);
    //this.navCtrl.push(ContraentePage);
  }
}
