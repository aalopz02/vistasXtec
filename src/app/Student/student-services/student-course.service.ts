import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})


// Sevicio para los cursps
export class StudentCourseService {
 
/**
 * Creates an instance of student course service.
 * @param http 
 */
constructor(private http: HttpClient) { }
  url : string = `http://3.138.203.114`;

  /**
   * Gets all cursos por carnet
   * @param carnet 
   * @returns cursos 
   */
  getAll(carnet:string) {
    //esto get para las actividades de un usuario loggeado
    return this.http.get<any[]>(this.url + `/` + "api/CURSO_IMPARTIDO/Estudiante/" + carnet);
  }
}

