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

export class BreadcrumbComponent implements OnInit{
 
  
  @Input()
    pagina: string ="";

    @Input()
    breadAbilitata= false;

    flag=false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public servizo : CreaPreventivoProvider) {
    console.log(this.pagina);
    console.log("costruttore");
  }

  ngOnInit()
  {
    console.log(this.pagina);
    //console.log(this.disabilitato);
    if(this.navCtrl.length()>4)
    {
      this.breadAbilitata=true;
      this.flag=true;
    }

  }




  pagInizio()
  {
    if(this.breadAbilitata)
    {
      this.navCtrl.push(HomePage,this.servizo.getVeicolo());
    }
  }
  navigateToGaranzia()
  {
    if(this.breadAbilitata)
    {
      this.navCtrl.push(GaranziaPage);
    }
  }
  
  navigateToPersona()
  {
    if(this.breadAbilitata)
    {
      this.navCtrl.push(ContraentePage,this.servizo.getPersona());
    }
  }
  back()
  {
    this.navCtrl.pop();
    this.flag=false;
  }
}



