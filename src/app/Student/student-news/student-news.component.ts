import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { StudentFoldersService } from './../student-services/student-folders.service';
import { StudentNewsService } from './../student-services/student-news.service';

/**
 * Component
 */
@Component({
  selector: 'app-student-news',
  templateUrl: './student-news.component.html',
  styleUrls: ['./student-news.component.css']
})
//Clase para obtener las noticias de un estudiante
export class StudentNewsComponent implements OnInit {

  //Declaracion de variables
  noticias = [];
  nombre ="";
  codigo = "";
  grupo = "";
  anno = "";
  periodo="";

  /**
   * Crea una instancia de student news component.
   * @param router 
   * @param StudentFoldersService 
   * @param StudentNewsService 
   */
  constructor(private router:Router, private StudentFoldersService: StudentFoldersService, private StudentNewsService:StudentNewsService) { 
    this.grupo=StudentFoldersService.grupo;
    this.anno=StudentFoldersService.anno;
    this.periodo=StudentFoldersService.periodo;
    this.codigo=StudentFoldersService.codigo;
  }

  /**
   * on init
   */
  ngOnInit(): void {
    this.StudentNewsService.getAll(this.grupo,this.codigo,this.periodo,this.anno).subscribe(data =>{
      this.noticias=data;
      console.log(data);
    });
  }

  

}
