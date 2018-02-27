import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Veicolo
{
  marca:string,
  modello:string,
  allestimento:string,
  annoImm:number,
  cilindrata:number
}

export interface Persona
{
  nome:string,
  cognome:string,
  dataNascita:string,
  luogoNascita:string,
  anniPatente:number
}

export interface Garanzia
{
  nome:string,
  codice:number,
  prezzo:number
}

export interface Preventivo
{
  prezzo:number,
  veicolo:Veicolo,
  persona:Persona,
  garanzie:Garanzia[],
  iva?:number
}


@Injectable()
export class CreaPreventivoProvider {

  

  veicolo : Veicolo = {

    marca:"",
    modello:"",
    allestimento:"",
    annoImm:0,
    cilindrata:0
    
  }

  persona: Persona =
  {
    nome:"",
    cognome:"",
    dataNascita: "",
    luogoNascita:"",
    anniPatente:null
  }

  garanzi: Garanzia[] = 
  [{
    nome:"",
    codice:0,
    prezzo:0
  }]

  preventivo:Preventivo={
    prezzo:0,
    veicolo:{marca:"",modello:"",annoImm:null,allestimento:"",cilindrata:null},
    persona:{nome:"",cognome:"",dataNascita:"",luogoNascita:"",anniPatente:null},
    garanzie:[]
  };

  constructor(public http: HttpClient) {
  }

  setPersona(pers: Persona)
  {
    this.persona = pers;
  }

  setVeicolo(auto : Veicolo)
  {
    this.veicolo = auto;
  }

  setGaranzia(gar: Garanzia[])
  {
    this.garanzi =gar;
  }

/*
  preve()
  {
      return this.preventivo={
      id:this.cont,
      veicolo:this.veicolo,
      persona:this.persona,
      garanzie:this.garanzi};

  }
  
  */

  getPersona():Persona{
    return this.persona;
  }
  getVeicolo(): Veicolo{
    return this.veicolo
  }
  getGaranzie():Garanzia[]
  {
    return this.garanzi;
  }
  getPreventivo() : Preventivo
  {
    this.preventivo.persona=this.getPersona();
    this.preventivo.veicolo=this.getVeicolo();
    this.preventivo.garanzie=this.getGaranzie();
    return this.preventivo;
  }

}
