import { Component ,Input} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { ContraentePage } from '../contraente/contraente';
import { CreaPreventivoProvider , Veicolo} from '../../providers/crea-preventivo/crea-preventivo';

 /**
 * Generated class for the VeicoloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-veicolo',
  templateUrl: 'veicolo.html',
})
export class VeicoloPage {
  @Input()
  veicolo : Veicolo;
  @Input()
  disabilitato : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public servizo : CreaPreventivoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VeicoloPage');
  }

  navigateToPersona(){
    console.log("navigaaaaaaa puoi!!!");
    this.servizo.setVeicolo(this.veicolo);
    this.navCtrl.push(ContraentePage);
  }
  formValida()
  {
    //console.log();
    if(
      this.veicolo.marca !==null &&  
      this.veicolo.modello !==null && 
      this.veicolo.annoImm !==null && 
      this.veicolo.allestimento !==null &&
      this.veicolo.cilindrata >= 1000)
      this.disabilitato=false;
    else
      this.disabilitato=true;
  }
}
