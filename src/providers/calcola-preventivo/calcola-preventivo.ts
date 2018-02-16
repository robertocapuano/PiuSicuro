import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Veicolo,Garanzia,Persona,Preventivo} from '../../providers/crea-preventivo/crea-preventivo';

@Injectable()
export class CalcolaPreventivoProvider {

  constructor(public http: HttpClient) {
  }

  data= new Date();



  calcolaAnniPat(prev:Preventivo)
  {
    let base:number=prev.veicolo.cilindrata/10;
    let preventivoTot:number=0;
    if(prev.persona.anniPatente<=3)
      preventivoTot=base+200;
    else if(prev.persona.anniPatente>=10)
      preventivoTot=base+50;
    else if(prev.persona.anniPatente>3 && prev.persona.anniPatente<10)
      preventivoTot=base+100;
    return preventivoTot;
  }

  calcolaAnniImm(prev:Preventivo)
  {
    let tot:number=0;
    if(this.data.getFullYear()-prev.veicolo.annoImm<=5)
        tot+=200;
    else if(this.data.getFullYear()-prev.veicolo.annoImm>5 && this.data.getFullYear()-prev.veicolo.annoImm<=10)
        tot+=150;
    else if(this.data.getFullYear()-prev.veicolo.annoImm>10)
        tot+=100;
    return tot;
  }

  calcoloPremio(prev:Preventivo)
  {
    let tot:number=0;
    let RCA=this.calcolaAnniPat(prev)+this.calcolaAnniImm(prev)+250;

    for(let i=0; i<prev.garanzie.length; i++)
    {
      switch(prev.garanzie[i].nome)
      {
        case 'incendio':
          tot+=100;
        break;
        case 'furto':
          tot+=100;
        break;
        case 'minikasko':
          tot+=300;
        break;
        case 'cristalli':
          tot+=200;
        break;

      }
    }
    return tot+RCA;
  }



}
