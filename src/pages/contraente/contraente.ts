import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreaPreventivoProvider,Persona } from '../../providers/crea-preventivo/crea-preventivo';
import {GaranziaPage} from '../garanzia/garanzia';
import {HomePage} from '../home/home';
import { Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-contraente',
  templateUrl: 'contraente.html',
})
export class ContraentePage {
 
  @Input()
  contraente : Persona={nome:"",cognome:"",dataNascita:"",luogoNascita:"",anniPatente:null};

  @Input()
    disabilitato=true;

 form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public servizo : CreaPreventivoProvider, public formBuilder: FormBuilder) {
    this.contraente=this.navParams.data;
    this.form= formBuilder.group({ 
      nome : ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      cognome: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      dataN: ['',Validators.compose([Validators.minLength(10),Validators.maxLength(10),Validators.required])],
      luogoN:['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      anniPat:['',Validators.compose([Validators.min(1),Validators.max(65),Validators.pattern('[0-9]*'),Validators.required]) ]  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContraentePage');
    this.validaForm();
  }


  validaForm()
  {
    if(
      this.contraente.nome !=="" &&
      this.contraente.cognome !=="" &&
      this.contraente.dataNascita !=="" &&
      this.contraente.luogoNascita !=="" &&
      this.contraente.anniPatente > 0)
      this.disabilitato=false;
    else
    this.disabilitato=true;
  }

  
  navigateToGaranzia(){
    console.log("navigaaaaaaa puoi!!!");
    if(!this.disabilitato){
      this.servizo.setPersona(this.contraente);
      if(this.navCtrl.getPrevious().name==="RiepilogoPage")
        this.navCtrl.pop();
      else
        this.navCtrl.push(GaranziaPage);
    }
    console.log(this.navCtrl.length());
    
  }
}
