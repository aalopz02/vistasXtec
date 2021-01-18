import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  address: string = 'https://localhost:44347/api/';

  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    const controller = 'CARRERA?';
    return this.http.get(this.address+controller);
    }
  

}