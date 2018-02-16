import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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


