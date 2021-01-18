import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})


// Servicio de Expediente Estudiantil
export class StudentExpService {

  /**
   * Creates an instance of student exp service.
   * @param http 
   */
  constructor(private http: HttpClient) { }
  url : string = `http://3.138.203.114`;

  /**
   * Gets all cursos del expediente
   * @param carnet 
   * @returns  cursos del expediente
   */
  getAll(carnet:string) {
    //esto get para las actividades de un usuario loggeado
    console.log(this.url + `/` + "api/EXPEDIENTE/" + carnet );
    return this.http.get<any[]>(this.url + `/` + "api/EXPEDIENTE/" + carnet );
    
  }
}
