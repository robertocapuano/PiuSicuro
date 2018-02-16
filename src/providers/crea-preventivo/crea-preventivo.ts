import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Veicolo
{
  marca:string,
  modello:string,
  allestimento:string,
  annoImm:number,
  cilindrata:number;
}

export interface Persona
{
  nome:string,
  cognome:string,
  dataNascita:Date,
  luogoNascita:string,
  anniPatente:number;
}

export interface Garanzia
{
  nome:string,
  codice:number;
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

  veicolo : Veicolo = {

    marca:"",
    modello:"",
    allestimento:"",
    annoImm:0,
    cilindrata:0
    
  }

  constructor(public http: HttpClient) {
    console.log('Hello CreaPreventivoProvider Provider');
  }

  setVeicolo(auto : Veicolo)
  {
    return this.veicolo = auto;
  }

}
