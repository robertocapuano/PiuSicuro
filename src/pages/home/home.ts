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

  marca:string="";
  modello:string="";
  allestimento:string="";
  annoI:string="";
  cilindrata:string="";
  abilitato:boolean=false;

  validaForm(){
    if(this.marca===''||
    this.modello==='' ||
    this.allestimento==='' ||
    this.annoI==='' ||
    this.cilindrata===''){
    this.abilitato=false;
    }
    else{
      this.abilitato=true;
    }
  
  }
  

  constructor(public navCtrl: NavController) {
    
    
  }

   
    

  }


