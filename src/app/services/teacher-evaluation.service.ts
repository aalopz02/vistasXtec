import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherEvaluationService {

  headingIn: string;

  courseGroup: string;
  courseCode: string;
  semCourse: string;
  yearCourse: string;

  evaluacionApiAdress: string = 'http://3.138.203.114/api/EVALUACION/Profesor/';

  constructor(private http: HttpClient) { }
  //api/EVALUACION/Profesor/{rubro_nombre}/{curso_grupo}/{curso_codigo}/{sem_periodo}/{sem_anno}/{nombre}"

  //Método para obtener todos los tipos de evaluaciones que existen en un rubro, de un curso determinado
  getEvaluations(){

    return this.http.get(this.evaluacionApiAdress + this.headingIn + '/' 
    + this.courseGroup +'/' + this.courseCode +'/' + this.semCourse +'/' + this.yearCourse);

  }


}
