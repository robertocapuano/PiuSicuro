import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreaPreventivoProvider,Persona } from '../../providers/crea-preventivo/crea-preventivo';
import {GaranziaPage} from '../garanzia/garanzia';
import {HomePage} from '../home/home';


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
  pagInizio()
  {
    this.navCtrl.push(HomePage);
  }
  validaForm()
  {
    if(
      this.contraente.nome !=="" &&
      this.contraente.cognome !=="" &&
      this.contraente.dataNascita !=="" &&
      this.contraente.luogoNascita !=="" &&
      this.contraente.anniPatente > 0)
      this.disabilitato=false;
    else
    this.disabilitato=true;
  }
  navigateToGaranzia(){
    console.log("navigaaaaaaa puoi!!!");
    this.servizo.setPersona(this.contraente);
    this.navCtrl.push(GaranziaPage);
  }
}
