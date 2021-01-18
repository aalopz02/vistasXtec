import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})

// Servicio para Carpetas
export class StudentFoldersService {

  // Declaracion de variables
  carpeta = "";
  codigo = "";
  grupo = "";
  anno = "";
  periodo="";

  /**
   * Creates an instance of student folders service.
   * @param http 
   */
  constructor(private http: HttpClient) { }
  url : string = `http://3.138.203.114`;

  
/**
 * Gets all carpetas
 * @param grupo 
 * @param codigo 
 * @param periodo 
 * @param anno 
 * @returns  carpetas
 */
getAll(grupo:string,codigo:string,periodo:string,anno:string) {
    //esto get para las actividades de un usuario loggeado
    return this.http.get<any[]>(this.url + `/` + "api/CARPETA/" + grupo + "/" + codigo + "/" + periodo + "/" + anno );
  }
}
