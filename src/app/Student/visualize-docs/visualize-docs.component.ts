import { Component, OnInit } from '@angular/core';
import { StudentFoldersService } from './../student-services/student-folders.service';

import { Router } from '@angular/router';
import { StudentGradesComponent } from './../student-grades/student-grades.component';
import { StudentMainComponent } from './../student-main/student-main.component';

/**
 * Component
 */
@Component({
  selector: 'app-visualize-docs',
  templateUrl: './visualize-docs.component.html',
  styleUrls: ['./visualize-docs.component.css']
})

// Clase para obtener las carpetas de estudiante
export class VisualizeDocsComponent implements OnInit {

  // Declaracion de variables
  carpetas = [];
  nombre ="";
  codigo = "";
  grupo = "";
  anno = "";
  periodo="";
  /**
   * Crea unn instancia de visualize docs component.
   * @param router 
   * @param StudentFoldersService 
   */
  constructor(private router:Router, private StudentFoldersService: StudentFoldersService) {
    this.grupo=StudentFoldersService.grupo;
    this.anno=StudentFoldersService.anno;
    this.periodo=StudentFoldersService.periodo;
    this.codigo=StudentFoldersService.codigo;
    
   }

  /**
   * on init
   */
  ngOnInit(): void {
    this.StudentFoldersService.getAll(this.grupo,this.codigo,this.periodo,this.anno).subscribe(data =>{
      this.carpetas=data;
      console.log(data);
    });
  }

  /**
   * Determines whether click on
   * @param nombre 
   * @param codigo del curso
   * @param grupo del curso
   * @param anno del curso
   * @param periodo del curso
   */
  onClick(nombre:string,codigo:string,grupo:string,anno:string,periodo:string){
    this.StudentFoldersService.carpeta=nombre;
    this.router.navigateByUrl('/student-doc');
  }

}
