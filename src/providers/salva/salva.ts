import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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
