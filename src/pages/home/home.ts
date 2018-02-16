import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VeicoloPage } from '../veicolo/veicolo';
import {Veicolo,Garanzia,Persona,Preventivo} from '../../providers/crea-preventivo/crea-preventivo';
import {CalcolaPreventivoProvider} from '../../providers/calcola-preventivo/calcola-preventivo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, prevProvider:CalcolaPreventivoProvider) 
  {
  }



}
