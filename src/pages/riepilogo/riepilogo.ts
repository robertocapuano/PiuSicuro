import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Preventivo,Garanzia,Persona,Veicolo, CreaPreventivoProvider} from '../../providers/crea-preventivo/crea-preventivo';

@IonicPage()
@Component({
  selector: 'page-riepilogo',
  templateUrl: 'riepilogo.html',
})
export class RiepilogoPage {

  preventivo:Preventivo={
    id:0,
    veicolo:{marca:"",modello:"",annoImm:null,allestimento:"",cilindrata:null},
    persona:{nome:"",cognome:"",dataNascita:"",luogoNascita:"",anniPatente:null},
    garanzie:[]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public serv:CreaPreventivoProvider) 
  {
    this.preventivo=serv.preve();
    console.log(this.preventivo);
   
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad RiepilogoPage');
  }

}
