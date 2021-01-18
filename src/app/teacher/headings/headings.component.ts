import { Component, OnInit } from '@angular/core';
import { TeacherEvaluationService } from 'src/app/services/teacher-evaluation.service';
import { TeacherHeadingsService } from 'src/app/services/teacher-headings.service';

@Component({
  selector: 'app-headings',
  templateUrl: './headings.component.html',
  styleUrls: ['./headings.component.css'],
})
export class HeadingsComponent implements OnInit {

  headings: any[] = [];
  editHeading: boolean = false;
  editMode: boolean = false;
  
  newHeadingName: string;
  

  constructor(private teacherHeadingsService: TeacherHeadingsService,
    private teacherEvaluationService: TeacherEvaluationService) {
   }

  ngOnInit(): void {

    for(let heading of this.teacherHeadingsService.headings){
      const Constheading = {
        name: heading.Nombre,
        porc: heading.Porcentaje
      }
      this.headings.push(Constheading);
    }
  }

  newHeading(){
    this.editHeading = true;
    this.editMode = false;

  }

  saveHeadings(){

    var total = 0;

    if(this.editHeading){
      this.newHeadingName = (<HTMLInputElement>document.getElementById('headName')).value;

      total += +(<HTMLInputElement>document.getElementById('headValue')).value;
      var newHeadingValue = +(<HTMLInputElement>document.getElementById('headValue')).value;

    }

    var newHeadingsValues = [];

    for(let heads of this.headings){
      total += +(<HTMLInputElement>document.getElementById(heads.name)).value;
      newHeadingsValues.push(+(<HTMLInputElement>document.getElementById(heads.name)).value);
    }

    if(total != 100){
      alert("La suma de los rubros debe ser 100");
    }else{

      for(let i = 0; i < 3; i++){
        if(newHeadingsValues[i] != this.headings[i].porc){
          
          this.headings[i].porc = newHeadingsValues[i];
          console.log('Dif', this.headings[i]);
          this.updateHeading(this.headings[i]);
           
        }
      }

      //this.completeHeadingCreation(newHeadingValue);
      
    }
    
  }

  updateHeading(heading: any){
    this.teacherHeadingsService.updateHeading(heading).subscribe((resp: any) => {
      console.log(resp);
    })
  }


  editHeadingMode(){
    this.editMode = true;
    this.editHeading = false;
  }


   completeHeadingCreation(newHeadingValue: number){
    this.teacherHeadingsService.createNewHeading(this.newHeadingName, newHeadingValue).subscribe((resp: any) => {
      console.log(resp);
      if(resp == '¡Rubro creado correctamente!'){
        const Constheading = {
          name: this.newHeadingName,
          porc: newHeadingValue
        }
        this.headings.push(Constheading);
      }
    });
  }

  cancelSaveHeadings(){
    this.editHeading = false;
    this.editMode = false;
  }

  goToEvaluation(heading: any){

    this.teacherEvaluationService.headingIn = heading.name;

    this.teacherEvaluationService.courseGroup = this.teacherHeadingsService.courseGroup;
    this.teacherEvaluationService.courseCode = this.teacherHeadingsService.courseCode;
    this.teacherEvaluationService.semCourse = this.teacherHeadingsService.semCourse;
    this.teacherEvaluationService.yearCourse = this.teacherHeadingsService.yearCourse;

    return this.teacherEvaluationService.getEvaluations().subscribe((resp:any) => {
      console.log(resp);
    })

  }



}
