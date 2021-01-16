import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { StudentFoldersService } from './../student-services/student-folders.service';
import { StudentNewsService } from './../student-services/student-news.service';

@Component({
  selector: 'app-student-news',
  templateUrl: './student-news.component.html',
  styleUrls: ['./student-news.component.css']
})
export class StudentNewsComponent implements OnInit {

  noticias = [];
  nombre ="";
  codigo = "";
  grupo = "";
  anno = "";
  periodo="";

  constructor(private router:Router, private StudentFoldersService: StudentFoldersService, private StudentNewsService:StudentNewsService) { 
    this.grupo=StudentFoldersService.grupo;
    this.anno=StudentFoldersService.anno;
    this.periodo=StudentFoldersService.periodo;
    this.codigo=StudentFoldersService.codigo;
  }

  
  ngOnInit(): void {
    this.StudentNewsService.getAll(this.grupo,this.codigo,this.periodo,this.anno).subscribe(data =>{
      this.noticias=data;
      console.log(data);
    });
  }

  

}
