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
  veicolo : Veicolo;
  @Input()
  disabilitato : boolean = true;
  constructor(public navCtrl: NavController,public servizo : CreaPreventivoProvider) {
  }
  
  navigateToPersona(){
    console.log("navigaaaaaaa puoi!!!");
    this.servizo.setVeicolo(this.veicolo);
    this.navCtrl.push(ContraentePage);
  }
  formValida()
  {
    //console.log();
    if(
      this.veicolo.marca !==null &&  
      this.veicolo.modello !==null && 
      this.veicolo.annoImm !==null && 
      this.veicolo.allestimento !==null &&
      this.veicolo.cilindrata >= 1000)
      this.disabilitato=false;
    else
      this.disabilitato=true;
  }
    

  }


