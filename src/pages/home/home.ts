import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VeicoloPage } from '../veicolo/veicolo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    navCtrl.push(VeicoloPage);

  }

}
