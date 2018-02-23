import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SalvaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SalvaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SalvaProvider Provider');
  }


  salvaDati()
  {
      let apiURL = `http://127.0.0.1:3000/`; 
     console.log("URL : "+apiURL);
      return this.http.get(apiURL).toPromise(); 
}

}
