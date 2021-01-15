import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  cursos: Array<{code: number, name: string, credits: number,
  carreer: string, group: number}> = [
    {code: 1, name: 'Course1', credits: 4, carreer: 'CE', group: 1},
    {code: 2, name: 'Course2', credits: 3, carreer: 'CE', group: 5},
    {code: 3, name: 'Course3', credits: 2, carreer: 'CE', group: 10},
    {code: 4, name: 'Course4', credits: 1, carreer: 'CE', group: 15},
    {code: 5, name: 'Course5', credits: 2, carreer: 'CE', group: 20},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ToDocuments(courseCode: number){
    this.router.navigate(['t-index/documents', courseCode]);
  }

  ToHeadings(courseCode: number){
    this.router.navigate(['t-index/headings', courseCode]);
  }


  ToEvaluation(courseCode: number){
    this.router.navigate(['t-index/evaluation', courseCode]);
  }

}
