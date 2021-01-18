import { Component, OnInit } from '@angular/core';
import { StudentFoldersService } from './../student-services/student-folders.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.css']
})
export class StudentGradesComponent implements OnInit {
  pdfSource =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  codigo = "";
  grupo = "";
  anno = "";
  periodo="";

  constructor(private router:Router, private StudentFoldersService: StudentFoldersService) { 
    this.grupo=StudentFoldersService.grupo;
    this.anno=StudentFoldersService.anno;
    this.periodo=StudentFoldersService.periodo;
    this.codigo=StudentFoldersService.codigo;
  }

  ngOnInit(): void {
  }

}
