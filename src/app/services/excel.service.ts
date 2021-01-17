import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
// Servicio de carga de excel
export class excelService {
  constructor(private http: HttpClient) { }

  url : string = `http://3.138.203.114/api/Excel`;

/**
 * Carga de archivo
 * @param archivo a guardar
 * @returns 
 */
cargarArchivo(archivo : string | ArrayBuffer ){
    return this.http.post(this.url +'?',{'file': archivo}).subscribe(data => {
      console.log(data);
    })
  }
  

}