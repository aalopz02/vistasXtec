import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentExpService } from './../student-services/student-exp.service';
import { StudentService } from './../student-services/student.service';

@Component({
  selector: 'app-student-file',
  templateUrl: './student-file.component.html',
  styleUrls: ['./student-file.component.css']
})
export class StudentFileComponent implements OnInit {

  carnet="";
  notas=[];
  constructor(private router:Router, private StudentService: StudentService,private StudentExpService:StudentExpService) { 
    this.carnet=StudentService.carnet;
  }

  ngOnInit(): void {
    this.StudentExpService.getAll(this.carnet).subscribe(data =>{
      this.notas=data;
      console.log(data);
    });
  }

}
