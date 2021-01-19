import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation-data',
  templateUrl: './evaluation-data.component.html',
  styleUrls: ['./evaluation-data.component.css']
})
export class EvaluationDataComponent implements OnInit {

  evaluationDataList: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
