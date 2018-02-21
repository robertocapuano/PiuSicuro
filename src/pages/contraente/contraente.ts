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
    disabilitato=true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public servizo : CreaPreventivoProvider) {
    this.contraente=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContraentePage');
    this.validaForm();
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
    if(!this.disabilitato){
      this.servizo.setPersona(this.contraente);
      if(this.navCtrl.getPrevious().name==="RiepilogoPage")
        this.navCtrl.pop();
      else
        this.navCtrl.push(GaranziaPage);
    }
  }
}
