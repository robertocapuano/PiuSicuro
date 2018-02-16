import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Veicolo,Garanzia,Persona,Preventivo} from '../../providers/crea-preventivo/crea-preventivo';
import {CalcolaPreventivoProvider} from '../../providers/calcola-preventivo/calcola-preventivo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, prevProvider:CalcolaPreventivoProvider) 
  {
      console.log(prevProvider.calcoloPremio(this.prev));

  }

  prev:Preventivo={
    id:1,
    veicolo:{
      marca:"audi",
      modello:"r8",
      allestimento:"sport",
      annoImm:2018,
      cilindrata:1300
    },
    persona:{
      nome:"gianni",
      cognome:"lucchi",
      dataNascita:new Date('1995-12-12'),
      luogoNascita:"milano",
      anniPatente:4
    },
    garanzie:[
      {
      nome:"furto",
      codice:123
    },
  {
    nome:"incendio",
    codice:124
  },
  {
    nome:"minikasko",
    codice:125
  }]
  }


}
