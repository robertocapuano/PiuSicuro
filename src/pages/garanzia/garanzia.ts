import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreaPreventivoProvider , Garanzia} from '../../providers/crea-preventivo/crea-preventivo';
import { RiepilogoPage } from '../riepilogo/riepilogo';
import {HomePage} from '../home/home';
import { ContraentePage } from '../contraente/contraente';
import { CalcolaPreventivoProvider } from '../../providers/calcola-preventivo/calcola-preventivo';




@IonicPage()
@Component({
  selector: 'page-garanzia',
  templateUrl: 'garanzia.html',
})
export class GaranziaPage {
  @Input()
  furto:boolean=false;
  @Input()
  incendio:boolean=false;
  @Input()
  minicasko:boolean=false;
  @Input()
  cristalli:boolean=false;
  
  
  garanzie: Garanzia[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public servizio : CreaPreventivoProvider,public calcola: CalcolaPreventivoProvider) {
  }

  addGaranzia(item : Garanzia){
    //console.log(item);
    this.garanzie.push(item);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaranziaPage');
  }

  pagInizio()
  {
    this.navCtrl.push(HomePage,this.servizio.getVeicolo());
  }

  navigateToRiepilogo()
  {
    this.garanzie=[];
    this.addGaranzia({nome:"RC",codice:478521, prezzo:0});
      
    if(this.furto)
      this.addGaranzia({nome:"Furto",codice:111111,prezzo:100});
    
    if(this.incendio)
      this.addGaranzia({nome:"Incendio",codice:22222,prezzo:100});

    if(this.cristalli)
      this.addGaranzia({nome:"Cristalli",codice:333333,prezzo:200});

    if(this.minicasko)
      this.addGaranzia({nome:"Mini Kasko",codice:111111,prezzo:300});

    this.servizio.setGaranzia(this.garanzie);
 
    
      this.navCtrl.push(RiepilogoPage);
  }

  navigateToPersona(){
    this.navCtrl.push(ContraentePage,this.servizio.getPersona());
  }
  
}
