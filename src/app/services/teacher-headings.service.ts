import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio para crear nuevas evaluaciones
 */
export class TeacherHeadingsService {

  courseGroup: string;
  courseCode: string;
  semCourse: string;
  yearCourse: string;

  headings: any[] = [];

  headingApiAdress: string = 'http://3.138.203.114/api/RUBRO/';

  constructor(private http: HttpClient) { }

  getHeadings(){

    return this.http.get(this.headingApiAdress+this.courseGroup+'/'+this.courseCode+'/'
    +this.semCourse+'/'+this.yearCourse);

  }

  createNewHeading(newHeadingName: string, headingValue: number){

    const newHeading = {
      nombre: newHeadingName,
      porcentaje: headingValue,
      curso_Grupo: this.courseGroup,
      curso_Codigo: this.courseCode,
      sem_Periodo: this.semCourse,
      sem_Anno: this.yearCourse,
    }
    console.log(newHeading);
    return this.http.post(this.headingApiAdress+'create', newHeading)
  }


  updateHeading(heading: any){
    const headingToUpdate = {
      nombre: heading.name,
      porcentaje: heading.porc,
      curso_Grupo: this.courseGroup,
      curso_Codigo: this.courseCode,
      sem_Periodo: this.semCourse,
      sem_Anno: this.yearCourse,
    }
    console.log(headingToUpdate);
    return this.http.put(this.headingApiAdress+'update', headingToUpdate);
  }

}
