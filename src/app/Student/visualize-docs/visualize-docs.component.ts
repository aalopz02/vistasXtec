import { Component, OnInit } from '@angular/core';
import { StudentMainComponent } from './../student-main/student-main.component';

@Component({
  selector: 'app-visualize-docs',
  templateUrl: './visualize-docs.component.html',
  styleUrls: ['./visualize-docs.component.css']
})
export class VisualizeDocsComponent implements OnInit {

  curso = "";
  constructor() { }

  ngOnInit(): void {
    this.curso;
  }

}
