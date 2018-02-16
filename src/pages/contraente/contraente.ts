import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreaPreventivoProvider,Persona } from '../../providers/crea-preventivo/crea-preventivo';
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
  contraente : Persona={nome:"",cognome:"",dataNascita:"",luogoNascita:"",anniPatente:null};
  @Input()
  disabilitato : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public servizo : CreaPreventivoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContraentePage');
  }

  formValida()
  {
    if(
      this.contraente.nome !== null &&
      this.contraente.cognome !== null &&
      this.contraente.dataNascita !== null &&
      this.contraente.luogoNascita !== null &&
      this.contraente.anniPatente > 0
    )
      this.disabilitato=true;
    else
    this.disabilitato=false;
  }
  navigateToGaranzia(){
    console.log("navigaaaaaaa puoi!!!");
    this.servizo.setPersona(this.contraente);
    //this.navCtrl.push(ContraentePage);
  }
}
