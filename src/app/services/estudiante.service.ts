import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  address: string = 'http://18.217.104.67/api/';

  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    const controller = 'Estudiante?';
    return this.http.get(this.address+controller);
    }

}