import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio para obtener las carpetas para los cursos de un profesor y los documentos de estas
 */
export class TeacherDocumentsService {

  apiAdress: string = 'http://3.138.203.114/api/CARPETA/';
  folderDataApiAdress: string = 'http://3.138.203.114/api/DOCUMENTO/';

  folders: any[] = [];
  folderIn: string;

  docsInFolder: any[] = [];

  newFolderName: string;
  courseGroup: string;
  courseCode: string;
  semCourse: string;
  yearCourse: string;

  newDocName: string;
  docData: string;
  docSize: string;
  uploadDate: string;


  constructor(private http: HttpClient) { }

  getFolders(){
    return this.http.get(this.apiAdress+this.courseGroup+'/'+this.courseCode+'/'
    +this.semCourse+'/'+this.yearCourse);
  }


  createFolder(){

    const folderTocreate = {
      nombre: this.newFolderName,
      curso_Grupo: this.courseGroup,
      curso_Codigo: this.courseCode,
      sem_Periodo: this.semCourse,
      Sem_Anno: this.yearCourse,
    }
    
    return this.http.post(this.apiAdress+'create', folderTocreate);
  }

  deleteFolder(folder: string){
    

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        nombre: folder,
        curso_Grupo: this.courseGroup,
        curso_Codigo: this.courseCode,
        sem_Periodo: this.semCourse,
        Sem_Anno: this.yearCourse,
      },
    };

    return this.http.delete(this.apiAdress+'delete', options);
  }


  getFolderData(folder: string){

    this.folderIn = folder;

    return this.http.get(this.folderDataApiAdress+'/'+folder+'/'+this.courseGroup+'/'+this.courseCode+'/'
    +this.semCourse+'/'+this.yearCourse);

  }

  uploadDocToFolder(){
    
    const docTocreate = {
      nombre: this.newDocName,
      data: this.docData,
      tamanno: this.docSize,
      fecha_Subida: this.uploadDate,
      carpeta_Nombre: this.folderIn,
      curso_Grupo: this.courseGroup,
      curso_Codigo: this.courseCode,
      sem_Periodo: this.semCourse,
      sem_Anno: this.yearCourse,
    }

    console.log('Documento a crear',docTocreate);

    return this.http.post(this.folderDataApiAdress+'create', docTocreate);
  }


  deleteDocument(doc: any){

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        nombre: doc.Nombre,
        data: doc.Data,
        tamanno: doc.Tamanno,
        fecha_Subida: doc.Fecha_Subida,
        carpeta_Nombre: this.folderIn,
        curso_Grupo: this.courseGroup,
        curso_Codigo: this.courseCode,
        sem_Periodo: this.semCourse,
        sem_Anno: this.yearCourse,
      },
    };

    console.log(options.body);
    return this.http.delete(this.folderDataApiAdress+'delete', options);

  }
}
