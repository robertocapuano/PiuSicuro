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
  codice:number
}

export interface Preventivo
{
  id:number,
  veicolo:Veicolo,
  persona:Persona,
  garanzie:Garanzia[]
}





@Injectable()
export class CreaPreventivoProvider {

  garanzie: string = "furto,incendio,minikasko,cristalli";
  codiciGaranzie: string="1235,1478,4587,9654";  
  cont:number=0;

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
    anniPatente:0
  }

  garanzi: Garanzia[] = 
  [{
    nome:"",
    codice:0
  }]

  preventivo:Preventivo={
    id:0,
    veicolo:{marca:"",modello:"",annoImm:null,allestimento:"",cilindrata:null},
    persona:{nome:"",cognome:"",dataNascita:"",luogoNascita:"",anniPatente:null},
    garanzie:[]
  };

  constructor(public http: HttpClient) {
      this.cont++;
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

  preve()
  {
      return this.preventivo={
      id:this.cont,
      veicolo:this.veicolo,
      persona:this.persona,
      garanzie:this.garanzi
    };
  }


}
