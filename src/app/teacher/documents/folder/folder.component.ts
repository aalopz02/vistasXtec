import { Component, OnInit } from '@angular/core';
import { TeacherDocumentsService } from 'src/app/services/teacher-documents.service';
import { formatDate } from '@angular/common';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],

})
/**
 * Componente para mostrar las carpetas de un profesor para cada curso
 */
export class FolderComponent implements OnInit {

  constructor(private teacherDocumentsService: TeacherDocumentsService) { }

  folder: string;
  docs: any[] = [];
  myDate = new Date();
  jsToday = '';

  ngOnInit(): void {

    this.folder = this.teacherDocumentsService.folderIn;
    this.docs = this.teacherDocumentsService.docsInFolder;
    console.log(this.docs);
    
  }

  handleUpload(event: any) {
    
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


  }

  upLoadDoc(){

    this.teacherDocumentsService.uploadDocToFolder().subscribe((resp: any) => {
      console.log(resp);
      
      if(resp == 'OK'){

        const docCreated = {
          Nombre: this.teacherDocumentsService.newDocName,
          Data: this.teacherDocumentsService.docData,
          Tamanno: this.teacherDocumentsService.docSize,
          Fecha_Subida: this.teacherDocumentsService.uploadDate,
          Carpeta_Nombre: this.folder,
          Curso_Grupo: this.teacherDocumentsService.courseGroup,
          Curso_Codigo: this.teacherDocumentsService.courseCode,
          Sem_Periodo: this.teacherDocumentsService.semCourse,
          Sem_Anno: this.teacherDocumentsService.yearCourse,
        };

        this.docs.push(docCreated);

      }

    })

  }


  deleteDoc(doc: any){
    return this.teacherDocumentsService.deleteFolder(doc).subscribe((resp: any) => {
      console.log(resp);
    });
  }


  visualizeDoc(doc: any){
    
    this.downloadFile(doc.Data, doc.Nombre);
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
