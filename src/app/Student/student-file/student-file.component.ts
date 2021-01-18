import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentExpService } from './../student-services/student-exp.service';
import { StudentService } from './../student-services/student.service';

/**
 * Component
 */
@Component({
  selector: 'app-student-file',
  templateUrl: './student-file.component.html',
  styleUrls: ['./student-file.component.css']
})
//Clase para ver el expediente de un estudiante
export class StudentFileComponent implements OnInit {

  //Declaracion de variables
  carnet="";
  notas=[];
  /**
   * Crea una instancia de student file component.
   * @param router 
   * @param StudentService 
   * @param StudentExpService 
   */
  constructor(private router:Router, private StudentService: StudentService,private StudentExpService:StudentExpService) { 
    this.carnet=StudentService.carnet;
  }

  /**
   * on init
   */
  ngOnInit(): void {
    this.StudentExpService.getAll(this.carnet).subscribe(data =>{
      this.notas=data;
      console.log(data);
    });
  }

}
