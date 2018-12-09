import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class RegisterProvider {

  constructor(public http: Http) {
    
  }

  serverRequest() {
    //Enviamos la petición POT al servidor por medio de una ruta
     return this.http.post('http://localhost:3000/api/checkname', "homer");
  }

}
