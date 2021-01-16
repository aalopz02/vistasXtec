import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentCourseService } from './../student-services/student-course.service';
import { StudentDocumentsService } from './../student-services/student-documents.service';
import { StudentFoldersService } from './../student-services/student-folders.service';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})


export class StudentMainComponent implements OnInit {

  cursos = [];
  private _curso:string;  
  constructor(private router:Router, private StudentCourseService: StudentCourseService, private StudentFoldersService:StudentFoldersService ) { }

  ngOnInit(): void {
    this.StudentCourseService.getAll("2017000001").subscribe(data =>{
      this.cursos=data;
      console.log(data);
    });

  }

   get curso(): string {
    return this._curso;}
   set curso(value: string) {
    this._curso = value;
}

  onClick(codigo:string,grupo:string,anno:string,periodo:string){
    this.StudentFoldersService.codigo=codigo;
    this.StudentFoldersService.grupo=grupo;
    this.StudentFoldersService.periodo=periodo;
    this.StudentFoldersService.anno=anno;
    console.log(this.StudentFoldersService.anno)
    
    this.router.navigateByUrl('/student-docs');
  }

}
