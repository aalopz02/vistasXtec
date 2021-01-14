import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentCourseService {

  constructor(private http: HttpClient) { }
  url : string = `https://localhost:44337`;

  getAll(carnet:string) {
    //esto get para las actividades de un usuario loggeado
    return this.http.get<any[]>(this.url + `/` + "api/CURSO_IMPARTIDO/Estudiante/" + carnet);
  }
}

