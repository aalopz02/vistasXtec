import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherDocumentsService } from 'src/app/services/teacher-documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {


  folders: any[] = []
  predefinedFolder: string[] = ['Exámenes', 'Presentaciones', 'Proyectos', 'Quices'];
  addedFolder: any[] = [];
  createFolder: boolean = false;

  constructor(private teacherDocumentsService: TeacherDocumentsService, private router: Router) { }



  ngOnInit(): void {

    this.folders = this.teacherDocumentsService.folders;
    

  }

  newFolder(){
    this.createFolder = true;
  }

  endCreateFolder(value: string){
    
    this.teacherDocumentsService.newFolderName = value;
    this.teacherDocumentsService.createFolder().subscribe((resp: any) => {
      if(resp == '¡Carpeta creada correctamente!'){
        this.createFolder = false;
        this.folders.push(value);
      }   
    });
  }

  deleteFolder(folder: string){
    this.teacherDocumentsService.deleteFolder(folder).subscribe((resp: any) => {

      
      if(resp == '¡Carpeta eliminada correctamente!'){

        this.folders.splice(this.folders.indexOf(folder));
      }
    })
  }


  folderData(folder: string){
    this.teacherDocumentsService.getFolderData(folder).subscribe((resp: any) => {

      this.teacherDocumentsService.docsInFolder = resp;
      
      this.router.navigate( ['t-index/documents/', this.teacherDocumentsService.courseCode, folder]);
      
    })
  }


}
