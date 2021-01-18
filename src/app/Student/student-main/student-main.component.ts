import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentCourseService } from './../student-services/student-course.service';
import { StudentDocumentsService } from './../student-services/student-documents.service';
import { StudentFoldersService } from './../student-services/student-folders.service';
import { StudentService } from './../student-services/student.service';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})


export class StudentMainComponent implements OnInit {

  carnet="";
  cursos = [];
  private _curso:string;  
  constructor(private router:Router, private StudentCourseService: StudentCourseService, private StudentFoldersService:StudentFoldersService, private StudentService: StudentService) {
    console.log(StudentService.carnet); 
    this.carnet=StudentService.carnet;
  }

  ngOnInit(): void {
    this.StudentCourseService.getAll(this.carnet).subscribe(data =>{
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
