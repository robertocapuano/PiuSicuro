import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Preventivo, CreaPreventivoProvider, Garanzia } from '../../providers/crea-preventivo/crea-preventivo';
import { ContraentePage } from '../contraente/contraente';
import { HomePage } from '../home/home';
import { GaranziaPage } from '../garanzia/garanzia';
import {SalvaProvider, Ris} from '../../providers/salva/salva';

@IonicPage()
@Component({
  selector: 'page-riepilogo',
  templateUrl: 'riepilogo.html',
})
export class RiepilogoPage {

  preventivo: Preventivo = this.serv.getPreventivo();



  ris:Ris={id:null,esito:null};
  id:number=null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serv: CreaPreventivoProvider,public salva:SalvaProvider) 
  {

  }

  
  salvaDati(){    
    this.salva.salvaDatiPost(this.preventivo).subscribe((data:Ris)=>{
      console.log(data);//ris in app.js
      this.ris=data;
      return true;
    },
    (err)=> {
      console.log(err);
      return true;
    });
  }

  codiceArrivato()
{
  let a:boolean=false
  if(this.ris.id!==null)
  {
    a=true;
    this.id=this.ris.id;
  }
  return a;
}

  /*
  salvaDati(){    
    this.salva.salvaDatiGet();
  }
  */

  navigateToPersona() {
    this.navCtrl.push(ContraentePage, this.serv.getPersona());
  }
  pagInizio() {
    this.navCtrl.push(HomePage, this.serv.getVeicolo());
  }

  navigateToGaranzia() {
    //console.log("navigaaaaaaa puoi!!!");
    this.navCtrl.push(GaranziaPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RiepilogoPage');
  }

}
