import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherEvaluationService {

  headingIn: string;
  evaluationList: any[] = [];
  courseGroup: string;
  courseCode: string;
  semCourse: string;
  yearCourse: string;

  evaluacionApiAdress: string = 'http://3.138.203.114/api/EVALUACION/Profesor/';

  constructor(private http: HttpClient) { }

  getEvaluation(evaluation: any){

    const noSpaceName = evaluation.Nombre.replace(/\s/g, "");
    return this.http.get(this.evaluacionApiAdress + this.headingIn + '/' 
    + this.courseGroup +'/' + this.courseCode +'/' + this.semCourse +'/' + this.yearCourse + '/' + evaluation.Nombre);

  }

  //Método para obtener todos los tipos de evaluaciones que existen en un rubro, de un curso determinado
  getEvaluations(){

    return this.http.get(this.evaluacionApiAdress + this.headingIn + '/' 
    + this.courseGroup +'/' + this.courseCode +'/' + this.semCourse +'/' + this.yearCourse);

  }


}
