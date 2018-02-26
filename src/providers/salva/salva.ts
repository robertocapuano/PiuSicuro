import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SalvaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SalvaProvider Provider');
  }

  
  salvaDatiPost(preventivo)
  {
      let apiURL = `http://127.0.0.1:3000`; 
      //console.log(preventivo);
     this.http.post(apiURL,JSON.stringify(preventivo)).subscribe((data)=>{
        console.log(data);
        return true;
      },
      (err)=> {
        console.log(err);
        return true;
      });
}


salvaDatiGet()
{
    let apiURL = `http://127.0.0.1:3000`; 
    let param = new HttpParams().append('id','9');
  // console.log("URL : "+apiURL);
    return this.http.get(apiURL,{params:param}).toPromise();
    
}


}
