import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
// Servicio para Reporte de Notas
export class StudentRepService {

    /**
   * Creates an instance of student news service.
   * @param http 
   */
  constructor(private http: HttpClient) { }
  url : string = `http://3.138.203.114`;

  /**
   * Gets report
   * @param grupo 
   * @param codigo 
   * @param periodo 
   * @param anno 
   * @param carnet
   * @returns  noticias
   */
  
  get(grupo:string,codigo:string,periodo:string,anno:string, carnet:string) {
    //esto get para las actividades de un usuario loggeado
    console.log(this.url + `/` + "api/Report/" + grupo + "/" + codigo + "/" + periodo + "/" + anno + "/" + carnet );
    return this.http.get<any[]>(this.url + `/` + "api/NOTICIA/" + grupo + "/" + codigo + "/" + periodo + "/" + anno+ "/" + carnet  );
    
  }
}
