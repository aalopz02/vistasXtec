import { Component, OnInit } from '@angular/core';
import { StudentFoldersService } from './../student-services/student-folders.service';

import { Router } from '@angular/router';
import { StudentGradesComponent } from './../student-grades/student-grades.component';
import { StudentMainComponent } from './../student-main/student-main.component';

@Component({
  selector: 'app-visualize-docs',
  templateUrl: './visualize-docs.component.html',
  styleUrls: ['./visualize-docs.component.css']
})
export class VisualizeDocsComponent implements OnInit {

  carpetas = [];
  nombre ="";
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
    this.StudentFoldersService.getAll(this.grupo,this.codigo,this.periodo,this.anno).subscribe(data =>{
      this.carpetas=data;
      console.log(data);
    });
  }

  onClick(nombre:string,codigo:string,grupo:string,anno:string,periodo:string){
    this.StudentFoldersService.carpeta=nombre;
    this.router.navigateByUrl('/student-doc');
  }

}
