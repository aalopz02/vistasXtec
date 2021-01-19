import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

import { StudentFoldersService } from './../student-services/student-folders.service';
import { Router } from '@angular/router';
import { StudentEvalService } from './../student-services/student-eval.service';
import { StudentService } from './../student-services/student.service';

@Component({
  selector: 'app-student-send-eval',
  templateUrl: './student-send-eval.component.html',
  styleUrls: ['./student-send-eval.component.css']
})
export class StudentSendEvalComponent implements OnInit {

  eval = [];
  carnet ="";
  codigo="";
  grupo = "";
  anno = "";
  periodo="";
  constructor(private router:Router, private StudentFoldersService: StudentFoldersService, private StudentService: StudentService, private StudentEvalService: StudentEvalService) { 
    this.grupo=StudentFoldersService.grupo;
    this.anno=StudentFoldersService.anno;
    this.codigo=StudentFoldersService.codigo;
    this.periodo=StudentFoldersService.periodo;
    this.carnet=StudentService.carnet;
  }

  ngOnInit(): void {
    this.StudentEvalService.getAll(this.carnet,this.grupo,this.codigo,this.periodo,this.anno).subscribe(data =>{
      this.eval=data;
      console.log(data);
    });
    //this.downloadFile("")
   }


  /**
   * Base64s to blob
   * @param b64Data string de la codificacion en base64
   * @param [contentType] 
   * @param [sliceSize] 
   * @returns  blob
   */
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

/**
 * Descargar un file
 * @param b64encodedString string en base64
 * @param filename nombre del archivo
 */
downloadFile(b64encodedString: string, filename:string) {
  if (b64encodedString) {
    var blob = this.base64ToBlob( b64encodedString.substring(23), 'text/plain');
    saveAs(blob, filename);
  }
}

handleUpload(event: any) {
/*     
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);

  this.jsToday = formatDate(this.myDate, 'yyyy-MM-dd hh:mm:ss', 'en-CR');

  this.teacherDocumentsService.newDocName = file.name;
  this.teacherDocumentsService.docSize = file.size.toFixed(5)+'';
  this.teacherDocumentsService.uploadDate = this.jsToday;
  

  reader.onload = () => {

      //console.log(reader.result);
      
      this.teacherDocumentsService.docData = reader.result as string;
      this.upLoadDoc();

  };
 */

}

/* upLoadDoc(){

  this.teacherDocumentsService.uploadDocToFolder().subscribe((resp: any) => {
    console.log(resp);
  })

} */

/**
 * Determines whether click1 on
 * @param nombre 
 */
onClick1(nombre:string){

  this.downloadFile("","");
}

/**
 * Determines whether click2 on
 * @param nombre 
 */
onClick2(nombre:string){

}
  
}
