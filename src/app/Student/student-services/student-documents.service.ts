import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
// Servicio para Documentos
export class StudentDocumentsService {

  /**
   * Creates an instance of student documents service.
   * @param http 
   */
  constructor(private http: HttpClient) { }
  url : string = `http://3.138.203.114`;

  /**
   * Gets all documentos
   * @param carpeta 
   * @param grupo 
   * @param codigo 
   * @param periodo 
   * @param anno 
   * @returns documentos de carpeta
   */
  getAll(carpeta:string,grupo:string,codigo:string,periodo:string,anno:string) {
    //esto get para las actividades de un usuario loggeado
    console.log(this.url + `/` + "api/DOCUMENTO/"+ carpeta +"/" + grupo + "/" + codigo + "/" + periodo + "/" + anno)
    return this.http.get<any[]>(this.url + `/` + "api/DOCUMENTO/"+ carpeta +"/" + grupo + "/" + codigo + "/" + periodo + "/" + anno);
  }

}
