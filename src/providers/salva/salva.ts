import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

export interface Ris
{
  id:number,
  esito:string
}

@Injectable()
export class SalvaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SalvaProvider Provider');
  }


  
  
  salvaDatiPost(preventivo):Observable<any>
  {
    let apiURL = `http://127.0.0.1:3000/salva`;
    //console.log(preventivo);
    return this.http.post(apiURL, JSON.stringify(preventivo));
    /*
    .subscribe((data:Ris)=>{
     console.log(data);//ris in app.js
     return true;
   },
   (err)=> {
     console.log(err);
     return true;
   });
   */
  }
  calcolaPrev(item):Observable<any>
  {
    let apiURL =`http://127.0.0.1:3000/calcolaPreventivo`;
    return this.http.post(apiURL,JSON.stringify(item));
  }


  getGaranzie()
  {
    let apiURL = `http://127.0.0.1:3000/garanzie`;
    //  let param = new HttpParams().append('id','9');
    // console.log("URL : "+apiURL);
    return this.http.get(apiURL).toPromise();
  }



}
