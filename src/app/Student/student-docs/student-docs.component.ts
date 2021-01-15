import { Component, OnInit } from '@angular/core';
import { StudentFoldersService } from './../student-services/student-folders.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-student-docs',
  templateUrl: './student-docs.component.html',
  styleUrls: ['./student-docs.component.css']
})
export class StudentDocsComponent implements OnInit {

  carpetas = [];
  codigo = "";
  grupo = "";
  anno = "";
  periodo="";
  constructor(private router:Router, private StudentFoldersService: StudentFoldersService) {
    this.codigo =this.router.getCurrentNavigation().extras.state.var1; 
    this.grupo =this.router.getCurrentNavigation().extras.state.var2; 
    this.anno =this.router.getCurrentNavigation().extras.state.var3;
    this.periodo =this.router.getCurrentNavigation().extras.state.var4; 
   }

  ngOnInit(): void {
    this.StudentFoldersService.getAll(this.grupo,this.codigo,this.periodo,this.anno).subscribe(data =>{
      this.carpetas=data;
      console.log(data);
    });
  }
}
