import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentCourseService } from './../student-services/student-course.service';

@Component({
  selector: 'app-student-file',
  templateUrl: './student-file.component.html',
  styleUrls: ['./student-file.component.css']
})
export class StudentFileComponent implements OnInit {

  carnet="";
  constructor(private router:Router, private StudentCourseService: StudentCourseService) { 
    this.carnet=StudentCourseService.carnet;
  }

  ngOnInit(): void {
  }

}
