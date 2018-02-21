import { Component,Input } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ContraentePage } from '../contraente/contraente';
import { CreaPreventivoProvider , Veicolo} from '../../providers/crea-preventivo/crea-preventivo';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @Input()
  veicolo : Veicolo={marca:"",modello:"",annoImm:null,allestimento:"",cilindrata:null};

  @Input()
  disabilitato=true;

  flag=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public servizo : CreaPreventivoProvider) {
    this.veicolo=this.navParams.data;
    this.servizo.setVeicolo(this.veicolo);
    console.log(this.navCtrl.length()+ "posizione pag costruttore");
    this.flag=this.flags();
    
  }

  getfocus() {
    document.getElementById("prosegui").focus();
}
 /* pagInizio()
  {
    this.navCtrl.push(HomePage);
  }
  navigateToGaranzia(){
    if(!this.disabilitato)
      this.navCtrl.push(GaranziaPage);
  }
  
*/navigateToPersona(){
    //console.log("navigaaaaaaa puoi!!!");
    if(!this.disabilitato){
      this.servizo.setVeicolo(this.veicolo);
      this.navCtrl.push(ContraentePage,this.servizo.getPersona());
      console.log(this.navCtrl.length()+ "navigate to pers");
    }
    
  }
  
  validaForm()
  {
    if(
      this.veicolo.marca !=="" &&  
      this.veicolo.modello !=="" && 
      this.veicolo.annoImm > 1000 && 
      this.veicolo.allestimento !=="" &&
      this.veicolo.cilindrata >= 1000)
      this.disabilitato=false;
    else
      this.disabilitato=true;
  }

  flags()
  {
    let ris=false;
    if(this.navCtrl.length()===4)
        ris=true;
        return ris;
  }
    
  popPage()
  {
    if(!this.disabilitato && this.flag)
    {
      this.navCtrl.pop();
      console.log("mi sono attivato");
     }
  }




  }


