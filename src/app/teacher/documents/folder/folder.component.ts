import { Component, OnInit } from '@angular/core';
import { TeacherDocumentsService } from 'src/app/services/teacher-documents.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],

})
export class FolderComponent implements OnInit {

  constructor(private teacherDocumentsService: TeacherDocumentsService) { }

  folder: string;
  docs: any[] = [];
  myDate = new Date();
  jsToday = '';

  ngOnInit(): void {

    this.folder = this.teacherDocumentsService.folderIn;
    this.docs = this.teacherDocumentsService.docsInFolder;
    
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
    })

  }

}
