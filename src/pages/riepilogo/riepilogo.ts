import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Preventivo,Garanzia,Persona,Veicolo, CreaPreventivoProvider} from '../../providers/crea-preventivo/crea-preventivo';
<<<<<<< HEAD
import { CalcolaPreventivoProvider } from '../../providers/calcola-preventivo/calcola-preventivo';
import { calcBindingFlags } from '@angular/core/src/view/util';
=======
import { HomePage } from '../home/home';
>>>>>>> 437e060532336c389034a66079b9e71fb87b0f91

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
  premio:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serv:CreaPreventivoProvider,public calcola : CalcolaPreventivoProvider) 
  {
    this.preventivo=serv.preve();
    //console.log(this.preventivo);
    this.premio=calcola.calcoloPremio(this.preventivo);
    //console.log(this.premio);
  }

  pagInizio()
  {
    this.navCtrl.push(HomePage);
  }


  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad RiepilogoPage');
  }

}
