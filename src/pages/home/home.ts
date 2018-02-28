import { Component,Input } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ContraentePage } from '../contraente/contraente';
import { CreaPreventivoProvider , Veicolo} from '../../providers/crea-preventivo/crea-preventivo';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @Input()
  veicolo : Veicolo={marca:"",modello:"",annoImm:null,allestimento:"",cilindrata:null};

  @Input()
  disabilitato=true;

  form : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public servizo : CreaPreventivoProvider, public formBuilder: FormBuilder) 
  {
    
    this.veicolo=this.navParams.data;
    this.servizo.setVeicolo(this.veicolo);
    this.validaForm();

    this.form= formBuilder.group(
      { 
                  marca : ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
                  modello: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9]*'), Validators.required])],
                  annoImm: ['',Validators.compose([Validators.min(1000),Validators.max(2100),Validators.pattern('[0-9]*'),Validators.required]) ],
                  allestimento:['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
                  cilindrata:['',Validators.compose([Validators.min(1000),Validators.max(10000),Validators.pattern('[0-9]*'),Validators.required]) ]  
                });
  }

  getfocus() 
  {
     document.getElementById("prosegui").focus();
  }


navigateToPersona()
{
    if(!this.disabilitato && this.form.valid){
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
    else{
      console.log('campi inseriti scorrettamente');  
    }
  }
  
  validaForm()
  {
    //console.log(this.form.controls.cilindrata.dirty);
    if(
      this.veicolo.marca !=="" &&  
      this.veicolo.modello !=="" && 
      this.veicolo.annoImm >= 1000 && 
      this.veicolo.allestimento !=="" &&
      this.veicolo.cilindrata >= 1000)
      this.disabilitato=false;
    else
      this.disabilitato=true;
  }

}


