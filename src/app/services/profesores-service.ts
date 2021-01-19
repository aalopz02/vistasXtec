import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { profesorModel } from '../models/profesor.model';

@Injectable({
  providedIn: 'root'
})

//Servicio que se comunica con el api de mongo para operar profesores

export class ProfesorService {
  
  address: string = 'http://18.217.104.67/api/';
  controller = 'Profesor?';

  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    
    return this.http.get(this.address+this.controller);
    }

  post(nombre: string, cedula: string, correo: string, contrasenna: string) : any{
    const httpParams = new HttpParams()
    .set('cedula', cedula)
    .set('nombre', nombre)
    .set('correo', correo)
    .set('contrasenna', contrasenna);
    return this.http.post(this.address+this.controller+httpParams,{});
  }
}
