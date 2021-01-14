import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentCourseService } from './../student-services/student-course.service';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})


export class StudentMainComponent implements OnInit {

  cursos = [];
  private _curso:string;  
  constructor(private router:Router, private StudentCourseService: StudentCourseService ) { }

  ngOnInit(): void {
    this.StudentCourseService.getAll("2018999999").subscribe(data =>{
      this.cursos=data;
      console.log(data);
    });

  }

   get curso(): string {
    return this._curso;}
   set curso(value: string) {
    this._curso = value;
}
  onClick(curso:string){
    this._curso=curso;
    console.log(this._curso);
    this.router.navigateByUrl('/student-docs');
  }

}
