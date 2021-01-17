import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { profesorModel } from '../models/profesor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  address: string = 'http://18.217.104.67/api/';

  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    const controller = 'Profesor?';
    return this.http.get(this.address+controller);
    }

}
