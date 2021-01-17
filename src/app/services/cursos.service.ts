import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CursosService {
  address: string = 'http://3.138.203.114/api/';

  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    const controller = 'CURSO?';
    return this.http.get(this.address+controller);
    }

}