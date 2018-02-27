import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Preventivo} from '../../providers/crea-preventivo/crea-preventivo';

@Injectable()
export class CalcolaPreventivoProvider {

  constructor(public http: HttpClient) {
    
  }

  data= new Date();
  RCA:number=0;


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
    this.RCA=this.calcolaAnniPat(prev)+this.calcolaAnniImm(prev)+250;
    
    
    for(let i=0; i<prev.garanzie.length; i++)
    {
      switch(prev.garanzie[i].nome)
      {
        case 'RC':
        {
          tot+=this.RCA;
          prev.garanzie[i].prezzo=this.RCA;
        }
        break;
        case 'Incendio':
          tot+=100;
        break;
        case 'Furto':
          tot+=100;
        break;
        case 'Mini Kasko':
          tot+=300;
        break;
        case 'Cristalli':
          tot+=200;
        break;
        default:
        break;
      }
    }
    return tot;
  }

  calcolaIva(prev:Preventivo)
  {
    let iva;    
    iva=(this.calcoloPremio(prev)*22)/100;
    return iva;
  }

}
