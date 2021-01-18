import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentCourseService } from './../student-services/student-course.service';
import { StudentDocumentsService } from './../student-services/student-documents.service';
import { StudentFoldersService } from './../student-services/student-folders.service';
import { StudentService } from './../student-services/student.service';

/**
 * Component
 */
@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})

// Clase para obtener cursos de estudiante
export class StudentMainComponent implements OnInit {

  // Declaracion de variables
  carnet="";
  cursos = [];
  private _curso:string;  
  /**
   * Crea una instancia de student main component.
   * @param router 
   * @param StudentCourseService 
   * @param StudentFoldersService 
   * @param StudentService 
   */
  constructor(private router:Router, private StudentCourseService: StudentCourseService, private StudentFoldersService:StudentFoldersService, private StudentService: StudentService) {
    console.log(StudentService.carnet); 
    this.carnet=StudentService.carnet;
  }

  /**
   * on init
   */
  ngOnInit(): void {
    this.StudentCourseService.getAll(this.carnet).subscribe(data =>{
      this.cursos=data;
      console.log(data);
    });

  }

  /**
   * Gets curso
   */
  get curso(): string {
    return this._curso;}
   /**
    * Sets curso
    */
   set curso(value: string) {
    this._curso = value;
}
/**
 * Determines whether click on
 * @param codigo del curso
 * @param grupo del curso
 * @param anno del curso
 * @param periodo del curso
 */
onClick(codigo:string,grupo:string,anno:string,periodo:string){
    this.StudentFoldersService.codigo=codigo;
    this.StudentFoldersService.grupo=grupo;
    this.StudentFoldersService.periodo=periodo;
    this.StudentFoldersService.anno=anno;
    console.log(this.StudentFoldersService.anno)
    
    this.router.navigateByUrl('/student-docs');
  }

}
