import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentCourseService } from './../student-services/student-course.service';
import { StudentExpService } from './../student-services/student-exp.service';

@Component({
  selector: 'app-student-file',
  templateUrl: './student-file.component.html',
  styleUrls: ['./student-file.component.css']
})
export class StudentFileComponent implements OnInit {

  carnet="";
  notas=[];
  constructor(private router:Router, private StudentCourseService: StudentCourseService,private StudentExpService:StudentExpService) { 
    this.carnet=StudentCourseService.carnet;
  }

  ngOnInit(): void {
    this.StudentExpService.getAll(this.carnet).subscribe(data =>{
      this.notas=data;
      console.log(data);
    });
  }

}
