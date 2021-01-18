import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})

// Servicio para Noticias
export class StudentNewsService {

  /**
   * Creates an instance of student news service.
   * @param http 
   */
  constructor(private http: HttpClient) { }
  url : string = `http://3.138.203.114`;

  /**
   * Gets all noticias
   * @param grupo 
   * @param codigo 
   * @param periodo 
   * @param anno 
   * @returns  noticias
   */
  getAll(grupo:string,codigo:string,periodo:string,anno:string) {
    //esto get para las actividades de un usuario loggeado
    console.log(this.url + `/` + "api/NOTICIA/" + grupo + "/" + codigo + "/" + periodo + "/" + anno );
    return this.http.get<any[]>(this.url + `/` + "api/NOTICIA/" + grupo + "/" + codigo + "/" + periodo + "/" + anno );
    
  }
}

