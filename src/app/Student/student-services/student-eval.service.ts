import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentEvalService {

  constructor(private http: HttpClient) { }
  url : string = `http://3.138.203.114`;

  getAll(carnet:string,grupo:string,codigo:string,periodo:string,anno:string) {
    //esto get para las actividades de un usuario loggeado
    console.log(this.url + `/` + "api/EVALUACION/Estudiante/"+ carnet +"/" + grupo + "/" + codigo + "/" + periodo + "/" + anno)
    return this.http.get<any[]>(this.url + `/` + "api/DOCUMENTO/"+ carnet +"/" + grupo + "/" + codigo + "/" + periodo + "/" + anno);
  }
}
