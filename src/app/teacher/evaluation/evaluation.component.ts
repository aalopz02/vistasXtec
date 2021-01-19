import { Component, OnInit } from '@angular/core';
import { TeacherEvaluationService } from 'src/app/services/teacher-evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  evaluationList: any = [];

  constructor(private teacherEvaluationService: TeacherEvaluationService) { }



  ngOnInit(): void {

    this.evaluationList = this.teacherEvaluationService.evaluationList;

  }

  newEvaluation(){

  }

  evaluationPage(evaluation: any){

    this.teacherEvaluationService.getEvaluation(evaluation).subscribe((resp: any) => {
      console.log(resp);
    });
  }

}
