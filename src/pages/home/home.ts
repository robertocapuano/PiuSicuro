import { Component,Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContraentePage } from '../contraente/contraente';
import { CreaPreventivoProvider , Veicolo} from '../../providers/crea-preventivo/crea-preventivo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @Input()
  veicolo : Veicolo={marca:"",modello:"",annoImm:null,allestimento:"",cilindrata:null};
  @Input()
  disabilitato : boolean = true;

  constructor(public navCtrl: NavController,public servizo : CreaPreventivoProvider) {
  }
  
  navigateToPersona(){
    console.log("navigaaaaaaa puoi!!!");
    this.servizo.setVeicolo(this.veicolo);
    this.navCtrl.push(ContraentePage);
  }
  validaForm()
  {
    //console.log(  );
    if(
      this.veicolo.marca !=="" &&  
      this.veicolo.modello !=="" && 
      this.veicolo.annoImm > 0 && 
      this.veicolo.allestimento !=="" &&
      this.veicolo.cilindrata >= 1000)
      this.disabilitato=false;
    else
      this.disabilitato=true;
  }
    

  }


