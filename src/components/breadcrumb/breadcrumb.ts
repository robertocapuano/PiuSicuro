import { Component, Output, Input, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreaPreventivoProvider } from '../../providers/crea-preventivo/crea-preventivo';
import {GaranziaPage} from '../../pages/garanzia/garanzia';
import {ContraentePage} from '../../pages/contraente/contraente';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'breadcrumb',
  templateUrl: 'breadcrumb.html'
})



@Output()



export class BreadcrumbComponent implements OnInit{
 
 
  
  @Input()
    pagina: string ="";

    @Input()
    disabilitato= true;

  
  constructor(public navCtrl: NavController, public navParams: NavParams,public servizo : CreaPreventivoProvider) {
    console.log(this.pagina);
    console.log("costruttore");
  }

  ngOnInit()
  {
    console.log(this.pagina);
    console.log(this.disabilitato);
  }




  pagInizio()
  {
    if(!this.disabilitato)
    this.navCtrl.push(HomePage);
  }
  navigateToGaranzia(){
    if(!this.disabilitato)
      this.navCtrl.push(GaranziaPage);
  }
  
navigateToPersona(){
    //console.log("navigaaaaaaa puoi!!!");
    if(!this.disabilitato){
      this.navCtrl.push(ContraentePage,this.servizo.getPersona());
    }
    
  }


}
