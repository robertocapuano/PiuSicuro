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

  constructor(public navCtrl: NavController, public navParams: NavParams,public servizo : CreaPreventivoProvider) {
    this.veicolo=this.navParams.data;
    this.servizo.setVeicolo(this.veicolo);
    console.log(this.navCtrl.length());
    this.validaForm();
    
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
      if(this.navCtrl.length()>1)
      {
        if(this.navCtrl.getPrevious().name==="RiepilogoPage")
          this.navCtrl.pop();
        else
          this.navCtrl.push(ContraentePage,this.servizo.getPersona());
      }
      else
        this.navCtrl.push(ContraentePage,this.servizo.getPersona());
    }
    console.log(this.navCtrl.length());
    
    
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
    
  validaStringhe()
  {
    let valido = false;
    if( this.veicolo.marca !=="" &&  
        this.veicolo.modello !=="" && 
        this.veicolo.allestimento !=="")
        valido = true;
    return valido;

  }

  validaNumber()
  {
    let valido = false;
    if( this.veicolo.annoImm > 1000 && 
         this.veicolo.cilindrata >= 1000)
        valido = true;
    return valido;
  }



  }


