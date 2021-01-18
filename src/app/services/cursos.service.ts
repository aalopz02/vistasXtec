import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cursoCrear } from '../models/crearCurso.model';
@Injectable({
  providedIn: 'root'
})
export class CursosService {
  address: string = 'https://localhost:44347/api/';

  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    const controller = 'CURSO?';
    return this.http.get(this.address+controller);
    }

  postCurso(curso : cursoCrear) : any{
    const controller = 'CURSO/create';
    console.log(curso);
    return this.http.post(this.address+controller,curso).subscribe(data => {
      console.log(data);
    });
  }

}