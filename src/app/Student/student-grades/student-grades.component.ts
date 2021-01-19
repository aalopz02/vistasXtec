import { Component, OnInit } from '@angular/core';
import { StudentFoldersService } from './../student-services/student-folders.service';

import { Router } from '@angular/router';

import { StudentCourseService } from './../student-services/student-course.service';
import { StudentService } from './../student-services/student.service';
import { StudentRepService } from './../student-services/student-rep.service';

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
  pdfSource =  "";
  pdf = [];
  carnet = "" ;
  codigo = "";
  grupo = "";
  anno = "";
  periodo="";

  /**
   * Crea una instancia de student grades component.
   * @param router 
   * @param StudentFoldersService 
   */
  constructor(private router:Router, private StudentFoldersService: StudentFoldersService, private StudentService: StudentService, private StudentRepService: StudentRepService) { 
    this.carnet=StudentService.carnet;
    this.grupo=StudentFoldersService.grupo;
    this.anno=StudentFoldersService.anno;
    this.periodo=StudentFoldersService.periodo;
    this.codigo=StudentFoldersService.codigo;
  }

  /**
   * on init
   */
  ngOnInit(): void {
    
    this.StudentRepService.get(this.grupo,this.codigo,this.periodo,this.anno,this.carnet).subscribe(data =>{
      this.pdf=data;
      console.log(data);
    });

    this.pdfSource = this.pdf[0];
  }

  /**
   * Base64s to blob
   * @param b64Data string de la codificacion en base64
   * @param [contentType] 
   * @param [sliceSize] 
   * @returns  blob
   */
  public base64ToBlob(b64Data, contentType='', sliceSize=512) {
    b64Data = b64Data.replace(/\s/g, ''); //IE compatibility...
    let byteCharacters = atob(b64Data);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);

        let byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        let byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, {type: contentType});
}



}
