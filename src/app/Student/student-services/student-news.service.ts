import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentNewsService {

  constructor(private http: HttpClient) { }
  url : string = `https://localhost:44337`;

  getAll(grupo:string,codigo:string,periodo:string,anno:string) {
    //esto get para las actividades de un usuario loggeado
    return this.http.get<any[]>(this.url + `/` + "api/NOTICIA/" + grupo + "/" + codigo + "/" + periodo + "/" + anno );
  }
}

