import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { StudentDocumentsService } from './../student-services/student-documents.service';
import { StudentFoldersService } from './../student-services/student-folders.service';


@Component({
  selector: 'app-student-docs',
  templateUrl: './student-docs.component.html',
  styleUrls: ['./student-docs.component.css']
})
export class StudentDocsComponent implements OnInit {

  documentos = [];
  nombre= "";
  codigo = "";
  grupo = "";
  anno = "";
  periodo="";
  constructor(private router:Router, private StudentDocumentsService:StudentDocumentsService, private StudentFoldersService: StudentFoldersService) {
    this.nombre=StudentFoldersService.carpeta
    this.grupo=StudentFoldersService.grupo;
    this.anno=StudentFoldersService.anno;
    this.periodo=StudentFoldersService.periodo;
    this.codigo=StudentFoldersService.codigo;
   }

  ngOnInit(): void {
    this.StudentDocumentsService.getAll(this.nombre,this.grupo,this.codigo,this.periodo,this.anno).subscribe(data =>{
      this.documentos=data;
      console.log(data);
    });
  }


  
  public base64ToBlob(b64Data, contentType='', sliceSize=512) {
    b64Data = b64Data.replace(/\s/g, ''); //IE compatibility...
    let byteCharacters = atob(b64Data);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);

        let byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        let byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, {type: contentType});
}

downloadFile(b64encodedString: string, filename:string) {
  if (b64encodedString) {
    var blob = this.base64ToBlob( b64encodedString.substring(23), 'text/plain');
    saveAs(blob, filename);
  }
}
}
