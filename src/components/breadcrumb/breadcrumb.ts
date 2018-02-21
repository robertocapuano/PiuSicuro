import { Component, Output, Input, OnInit} from '@angular/core';
import { NavController, NavParams, NavPop, ViewController } from 'ionic-angular';
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

    @Input()
    popPage=false;

    flag=false;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public servizo : CreaPreventivoProvider, public viewCtrl : ViewController) {
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
      this.navCtrl
        .push(ContraentePage,this.servizo.getPersona())
    }
  }

naviga(pageName:string)
{
  if(this.breadAbilitata)
  {
         
    for ( let i=0; i < this.navCtrl.length(); i++ )
          {
            let v = this.navCtrl.getViews()[i];
            console.log(i,v.component.name);
            if(pageName === v.component.name)
            {
             
              //console.log("prima "+this.navCtrl.length());
                this.navCtrl.popTo(v);
                console.log(i,v.component.name);
                //console.log("dopo "+this.navCtrl.length());
              }
             
          }

    console.log(this.navCtrl.length());
          


         /* let found: boolean = views.some((view, i) =>{
            let index: number = i;
            return (view.id == 'HomePage');
          });
          found ?  : 
          console.log('non trovata');*/

        
  }
          
}
  
  back()
  {
    this.navCtrl.pop();
    this.flag=false;
  }




}



