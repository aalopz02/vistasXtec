import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VistasXtec';
  error: string;
  adminForm: FormGroup;
  estudianteForm: FormGroup;
  profesorForm: FormGroup;
  usertoCheck: any = [];
  userType = 'estudiante';
  constructor(private loginService: LoginService, private formB: FormBuilder, private router: Router) { 
    this.estudianteForm = this.formB.group({
      id: '',
      password: ''
    });
    this.profesorForm = this.formB.group({
      id: '',
      password: ''
    });
    this.adminForm = this.formB.group({
      id: '',
      password: ''
    });
  }
  
  ngOnInit(): void {
  }

  circleUserType(type:string){
    this.userType = type;
    console.log(type);
  }

/**
 * Checks user y constraseña
 * @param userdata para login
 */
checkUser(userdata: any){

    if (this.userType == 'estudiante'){
      this.loginService.checkEstudiante(userdata.id).subscribe(res => {
      
        this.usertoCheck = res;
  
        if(this.usertoCheck == null){
          this.error = 'Usuario no registrado';
        }else if (this.usertoCheck.contrasenna == userdata.password){
          console.log('Ingresando')
          this.loginService.setUserLogged(this.usertoCheck);
          //this.router.navigate(['/user-home']);
  
        }else{
          this.error = 'Contraseña incorrecta';
        }
  
      });
      return;
    }
    if (this.userType == 'admin'){
      this.loginService.checkAdmin(userdata.id).subscribe(res => {
      
        this.usertoCheck = res;
  
        if(this.usertoCheck == null){
          this.error = 'Usuario no registrado';
        }else if (this.usertoCheck.contrasenna == userdata.password){
          console.log('Ingresando')
          this.loginService.setUserLogged(this.usertoCheck);
          //this.router.navigate(['/user-home']);
  
        }else{
          this.error = 'Contraseña incorrecta';
        }
  
      });
      return;
    }
    if (this.userType == 'profesor'){
      this.loginService.checkProfesor(userdata.id).subscribe(res => {
      
        this.usertoCheck = res;
  
        if(this.usertoCheck == null){
          this.error = 'Usuario no registrado';
        }else if (this.usertoCheck.contrasenna == userdata.password){
          console.log('Ingresando')
          this.loginService.setUserLogged(this.usertoCheck);
          //this.router.navigate(['/user-home']);
  
        }else{
          this.error = 'Contraseña incorrecta';
        }
  
      });
      return;
    }
    
    
  }

  verificarEstudiante(){
    if (this.userType == 'estudiante'){
      return true;
    }
    return false;
  }
  verificarProfesor(){
    if (this.userType == 'profesor'){
      return true;
    }
    return false;
  }
  verificarAdmin(){
    if (this.userType == 'admin'){
      return true;
    }
    return false;
  }

}
