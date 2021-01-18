import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  address: string = 'http://3.138.203.114/api/';

  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    const controller = 'CARRERA?';
    return this.http.get(this.address+controller);
    }
  
  post(nombreCarrera : string) : any {
    const controller = 'CARRERA/create/';
    return this.http.post(this.address+controller+nombreCarrera,{});
  }  

}