import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {


  predefinedFolder: any[] = ['Quices', 'Presentaciones', 'Examenes', 'Proyectos']
  addedFolder: any[] = [];
  createFolder: boolean = false;

  constructor() { }



  ngOnInit(): void {
  }

  newFolder(){
    this.createFolder = true;
  }

  endCreateFolder(value: string){
    this.addedFolder.push(value);
    this.createFolder = false;
  }



}
