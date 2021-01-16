import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { StudentDocumentsService } from './../student-services/student-documents.service';
import { StudentFoldersService } from './../student-services/student-folders.service';


@Component({
  selector: 'app-student-docs',
  templateUrl: './student-docs.component.html',
  styleUrls: ['./student-docs.component.css']
})
export class StudentDocsComponent implements OnInit {

  documentos = [];
  nombre= "";
  codigo = "";
  grupo = "";
  anno = "";
  periodo="";
  constructor(private router:Router, private StudentDocumentsService:StudentDocumentsService, private StudentFoldersService: StudentFoldersService) {
    this.nombre=StudentFoldersService.carpeta
    this.grupo=StudentFoldersService.grupo;
    this.anno=StudentFoldersService.anno;
    this.periodo=StudentFoldersService.periodo;
    this.codigo=StudentFoldersService.codigo;
   }

  ngOnInit(): void {
    this.StudentDocumentsService.getAll(this.nombre,this.grupo,this.codigo,this.periodo,this.anno).subscribe(data =>{
      this.documentos=data;
      console.log(data);
    });
  }
}
