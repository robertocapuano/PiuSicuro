import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreaPreventivoProvider , Garanzia} from '../../providers/crea-preventivo/crea-preventivo';
import { RiepilogoPage } from '../riepilogo/riepilogo';
import {HomePage} from '../home/home';
import { ContraentePage } from '../contraente/contraente';
import { CalcolaPreventivoProvider } from '../../providers/calcola-preventivo/calcola-preventivo';
import { SalvaProvider } from '../../providers/salva/salva';




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
  garanzieTot:Garanzia[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public servizio : CreaPreventivoProvider,public calcola: CalcolaPreventivoProvider, public salva:SalvaProvider) {
  this.salva.getGaranzie().then(
    (data:Garanzia[])=>
    {
      console.log(data);
      this.garanzieTot=data;
    },
    (err)=>
    {
      console.log(err);
      
    });
  
  
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
          this.addGaranzia(this.garanzieTot[0]);
        
        if(this.incendio)
          this.addGaranzia(this.garanzieTot[1]);

        if(this.cristalli)
          this.addGaranzia(this.garanzieTot[3]);

        if(this.minicasko)
          this.addGaranzia(this.garanzieTot[2]);

    this.servizio.setGaranzia(this.garanzie);
 
    
      this.navCtrl.push(RiepilogoPage);
  }

  navigateToPersona(){
    this.navCtrl.push(ContraentePage,this.servizio.getPersona());
  }
  


}
