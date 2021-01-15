import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userType: number = 1; 
  LogInForm: FormGroup;

  constructor(private formB: FormBuilder, private router: Router, private userLoginService: UserLoginService) { 
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
    this.router.navigate(['t-index']);
    /*
    this.userLoginService.LogIn(this.userType, formData.userID).subscribe((resp: any) => {
      const answer = resp;
      const EncryPass = Md5.hashStr(formData.password);
      

      
      if(this.userType == 2){
        if(EncryPass == answer[4]._value){
          this.router.navigate(['t-index']);
        }else{
          console.log('Contrasena incorrecta');
        }  
      }else if(this.userType == 3){
        if(EncryPass == answer[5]._value){
          console.log('Contrasena correcta');
        }else{
          console.log('Contrasena incorrecta');
        }
      }else{
        if(formData.password == answer[2]._value){
          console.log('Contrasena correcta');
        }else{
          console.log('Contrasena incorrecta');
        }
      }
      
    });
    */
  }

}
