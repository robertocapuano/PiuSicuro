import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreaPreventivoProvider , Garanzia} from '../../providers/crea-preventivo/crea-preventivo';
import { RiepilogoPage } from '../riepilogo/riepilogo';


/**
 * Generated class for the GaranziaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public servizio : CreaPreventivoProvider) {
  }

  addGaranzia(item : Garanzia){
    this.garanzie.push(item);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaranziaPage');
  }
  navigateToRiepilogo()
  {
    this.addGaranzia({nome:"rca",codice:0});
    if(this.furto)
      this.addGaranzia({nome:"furto",codice:111111});
    
    if(this.incendio)
      this.addGaranzia({nome:"incendio",codice:22222});

    if(this.cristalli)
      this.addGaranzia({nome:"cristalli",codice:333333});

    if(this.minicasko)
      this.addGaranzia({nome:"minicasko",codice:111111});

    this.servizio.setGaranzia(this.garanzie);
    //console.log("navigaaaaaaaaa versoooo l infinito e oltreeee aahahahahah no skerzo verso il riepilogo");
    this.navCtrl.push(RiepilogoPage);
  }
}
