import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';
import {Md5} from 'ts-md5/dist/md5';
import { StudentCourseService } from './../Student/student-services/student-course.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userType: number = 1; 
  LogInForm: FormGroup;
  error: string;
  constructor(private formB: FormBuilder, private router: Router, private userLoginService: UserLoginService,private StudentCourseService:StudentCourseService) { 
    this.LogInForm = this.formB.group({
    userID: [''],
    password: ['']
    });
  }

  ngOnInit(): void {
  }

  AdminUser(){
    this.userType = 1;
  }

  TeacherUser(){
    this.userType = 2;
  }

  StudentUser(){
    this.userType = 3;
  }

  onSubmit(formData: any){
    
    this.userLoginService.LogIn(this.userType, formData.userID).subscribe((resp: any) => {
      const answer = resp;
      
      if (answer == null){
        console.log('Usuario no existe');
        this.error = 'Usuario no existe';
        return;
      }
      const EncryPass = Md5.hashStr(formData.password);
      console.log(EncryPass);

      if(this.userType == 2){
        console.log(answer[4]._value);
        if(EncryPass == answer[4]._value){
          this.router.navigate(['t-index']);
        }else{
          console.log('Contrasena incorrecta');
          this.error = 'Contrasena incorrecta';
        }  
      }else if(this.userType == 3){
        if(EncryPass == answer[5]._value){
          this.router.navigateByUrl('/student-main');
          this.StudentCourseService.carnet=formData.userID;
          console.log('Contrasena correcta');
        }else{
          console.log('Contrasena incorrecta');
          this.error = 'Contrasena incorrecta';
        }
      }else{
        if(formData.password == answer[2]._value){
          this.router.navigateByUrl('ventana-admin');
          console.log('Contrasena correcta');
        }else{
          console.log('Contrasena incorrecta');
          this.error = 'Contrasena incorrecta';
        }
      }
      
    });
    
  }

}
