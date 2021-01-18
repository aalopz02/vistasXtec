import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  
  address: string = 'http://18.217.104.67/api/';
  controller = 'Estudiante?';

  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    
    return this.http.get(this.address+this.controller);
    }

  post(nombre: string, carnet: string, correo: string, telefono: string, contrasenna: string) : any{
    const httpParams = new HttpParams()
    .set('carnet', nombre)
    .set('nombre', carnet)
    .set('correo', correo)
    .set('telefono', telefono)
    .set('contrasenna', contrasenna);
    return this.http.post(this.address+this.controller+httpParams,{});
  }
}
