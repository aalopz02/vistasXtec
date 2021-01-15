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
  codigo:string; 
  grupo:string; 
  anno:string; 
  periodo:string;  
  constructor(private router:Router, private StudentCourseService: StudentCourseService ) { }

  ngOnInit(): void {
    this.StudentCourseService.getAll("2017000001").subscribe(data =>{
      this.cursos=data;
      console.log(data);
    });

  }

  onClick(codigo:string,grupo:string,anno:string,periodo:string){
    this.codigo=codigo;
    this.grupo=grupo;
    this.anno=anno;
    this.periodo=periodo;
    this.router.navigateByUrl('/student-docs',{ state: { var1: codigo , var2:grupo, var3: anno , var4:periodo} });
  }

}
