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

  garanzia: Garanzia = 
  {
    nome:"",
    codice:0
  }

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

  setGaranzia(gar: Garanzia)
  {
    this.garanzia = gar;
  }

}
