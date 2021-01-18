import { Component, OnInit } from '@angular/core';
import { StudentFoldersService } from './../student-services/student-folders.service';

import { Router } from '@angular/router';

/**
 * Component
 */
@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.css']
})

// Clase para obtener el reporte de notas de un estudiante
export class StudentGradesComponent implements OnInit {
  // Declaracion de variables
  pdfSource =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  codigo = "";
  grupo = "";
  anno = "";
  periodo="";

  /**
   * Crea una instancia de student grades component.
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
  }

}
