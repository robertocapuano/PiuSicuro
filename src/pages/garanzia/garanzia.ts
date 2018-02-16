import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreaPreventivoProvider , Garanzia} from '../../providers/crea-preventivo/crea-preventivo';


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
  garanzieValide;
  @Input()
  garanzia : Garanzia ={nome:"",codice:null};
  garanzie: Garanzia[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public servizio : CreaPreventivoProvider) {
    this.garanzieValide=servizio.garanzie.split(",");
  }

  addGaranzia(item){
    this.garanzie.push(item);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaranziaPage');
  }

}
