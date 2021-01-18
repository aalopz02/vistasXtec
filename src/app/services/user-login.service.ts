import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  ipadress: string = 'http://18.217.104.67/api/';


  constructor(private http: HttpClient) { }

  LogIn(userType: number, userID: string){

    if(userType == 1){
      const controller = 'Admin?';
      const httpParams = new HttpParams()
      .set('id', userID)

      return this.http.get(this.ipadress+controller+httpParams);

    }else if(userType == 2){
      const controller = 'Profesor?';
      const httpParams = new HttpParams()
      .set('cedula', userID)

      return this.http.get(this.ipadress+controller+httpParams);

    }else{
      const controller = 'Estudiante?';
      const httpParams = new HttpParams()
      .set('carnet', userID)

      return this.http.get(this.ipadress+controller+httpParams);

    }
    
  }


}
