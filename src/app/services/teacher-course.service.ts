import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TeacherCourseService {

  id: string;
  courses: any[];
  apiAdress: string = 'http://3.138.203.114/api/CURSO_IMPARTIDO/Profesor/';
  
  constructor(private http: HttpClient) { }

  getCourses(){
    return this.http.get(this.apiAdress+this.id);
  }
}
