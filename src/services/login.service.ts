import { Injectable } from '@angular/core';
import { login } from '../models/login.model';
import { HttpClient, HttpParams } from '@angular/common/http'
import { stringify } from 'querystring';
/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
// Servicio de usuario
export class LoginService {

  UrlProfesor: string = 'https://localhost:44379/api/Profesor?';
  UrlAdmin: string = 'https://localhost:44379/api/Admin?';
  UrlEstudiante: string = 'https://localhost:44379/api/Estudiante?';
  loggedUser: any = [];
  /**
   * Creates an instance of login service.
   * @param http 
   */
  constructor(private http: HttpClient) { }

  /**
   * Sets user logged
   * @param user 
   */
  setUserLogged(user: any){
    this.loggedUser = user;
  }

    /**
    * Checks log in
    * @param username 
    * @returns  
    */
    checkAdmin(id: number){
        return this.http.get<any>(this.UrlAdmin+'/'+id)
  }

   /**
    * Checks log in
    * @param username 
    * @returns  
    */
   checkEstudiante(id: number){
    return this.http.get<any>(this.UrlEstudiante+'/'+id)
}

 /**
    * Checks log in
    * @param username 
    * @returns  
    */
   checkProfesor(id: number){
    return this.http.get<any>(this.UrlProfesor+'/'+id)
}

}
