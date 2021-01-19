import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cursoModel } from '../models/curso.model';
import { semestreModel } from '../models/semestre.model';
@Injectable({
  providedIn: 'root'
})

//Servicio para comunicarse con el api de sql para operar semestres

export class SemestreService {
  address: string = 'http://3.138.203.114/api/';

  constructor(private http: HttpClient) { }

  postCurso(curso : cursoModel, semester : semestreModel) : Observable<any>{
    const controller = 'SEMESTRE/create/';
    console.log(curso);
    return this.http.post(this.address+controller+semester.anno+"/"+semester.periodo,curso);
    }

}