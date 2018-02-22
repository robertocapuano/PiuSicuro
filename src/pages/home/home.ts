import { Component,Input } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ContraentePage } from '../contraente/contraente';
import { CreaPreventivoProvider , Veicolo} from '../../providers/crea-preventivo/crea-preventivo';
import { Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';

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
  form : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public servizo : CreaPreventivoProvider, public formBuilder: FormBuilder ) {
    this.veicolo=this.navParams.data;
    this.servizo.setVeicolo(this.veicolo);
    console.log(this.navCtrl.length());
    this.validaForm();

    /*this.slideOneForm = new FormGroup({
      marca: new FormControl(),
      modello: new FormControl(),
      annoImm: new FormControl(),
      allestimento: new FormControl(),
      cilindrata:new FormControl() 
   });*/

    this.form= formBuilder.group({ 
                  marca : ['',Validators.compose([Validators.maxLength(2), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
                  modello: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
                  annoImm: ['',Validators.compose([Validators.min(1000),Validators.max(2100),Validators.required]) ],
                  allestimento:['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
                  cilindrata:['',Validators.compose([Validators.min(1000),Validators.max(10000),Validators.required]) ]  });
 
    
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
    
    //verifica la validazione dei caratteri
    if(!this.form.valid){  
      console.log('campi inseriti scorrettamente');    }    
      else {        console.log("success!");        
      console.log(this.form.value);  }

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


