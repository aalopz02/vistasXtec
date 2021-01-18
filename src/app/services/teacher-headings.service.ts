import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
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

}
