import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreaPreventivoProvider , Garanzia} from '../../providers/crea-preventivo/crea-preventivo';
import { RiepilogoPage } from '../riepilogo/riepilogo';


@IonicPage()
@Component({
  selector: 'page-garanzia',
  templateUrl: 'garanzia.html',
})
export class GaranziaPage {
  @Input()
  furto:boolean;
  @Input()
  incendio:boolean;
  @Input()
  minicasko:boolean;
  @Input()
  cristalli:boolean;
  

  garanzie: Garanzia[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public servizio : CreaPreventivoProvider) {
  }

  addGaranzia(item : Garanzia){
    console.log(item);
    this.garanzie.push(item);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaranziaPage');
  }
  navigateToRiepilogo()
  {
    if(this.furto)
      this.addGaranzia({nome:"furto",codice:111111});
    
    if(this.incendio)
      this.addGaranzia({nome:"incendio",codice:22222});

    if(this.cristalli)
      this.addGaranzia({nome:"cristalli",codice:333333});

    if(this.minicasko)
      this.addGaranzia({nome:"minicasko",codice:111111});

    this.servizio.setGaranzia(this.garanzie);
    console.log(this.garanzie);
    //console.log("navigaaaaaaaaa versoooo l infinito e oltreeee aahahahahah no skerzo verso il riepilogo");
    this.navCtrl.push(RiepilogoPage);
  }
}
