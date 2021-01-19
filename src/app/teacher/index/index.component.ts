import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherCourseService } from 'src/app/services/teacher-course.service';
import { TeacherDocumentsService } from 'src/app/services/teacher-documents.service';
import { TeacherEvaluationService } from 'src/app/services/teacher-evaluation.service';
import { TeacherHeadingsService } from 'src/app/services/teacher-headings.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

/**
 * Página de inicio para profesor
 */
export class IndexComponent implements OnInit {

  cursos: Array<{Curso_Codigo: number, Sem_Periodo: string, Grupo: number,
  Sem_Anno: string}> = [];

  constructor(private router: Router, private teacherCourseService: TeacherCourseService, 
    private teacherDocumentService: TeacherDocumentsService, private teacherEvaluationService: TeacherEvaluationService,
    private teacherHeadingsService: TeacherHeadingsService) { }

  ngOnInit(): void {
    
    for(let course of this.teacherCourseService.courses){
      this.cursos.push(course);
    }
    
    
  }

  ToDocuments(course: any){
    
    const courseDoc = course;

    this.teacherDocumentService.courseGroup = courseDoc.Grupo;
    this.teacherDocumentService.courseCode = courseDoc.Curso_Codigo;
    this.teacherDocumentService.semCourse = courseDoc.Sem_Periodo;
    this.teacherDocumentService.yearCourse = courseDoc.Sem_Anno;
    
    this.teacherDocumentService.getFolders().subscribe((resp: any) => {
      
      const answer = resp;
      
      for(let folder of answer){
        
        this.teacherDocumentService.folders.push(folder.Nombre);
      }
      
      this.router.navigate(['t-index/documents', courseDoc.Curso_Codigo]);
      
    });
    
  }

  ToHeadings(course: any){


    this.teacherHeadingsService.courseGroup = course.Grupo;
    this.teacherHeadingsService.courseCode = course.Curso_Codigo;
    this.teacherHeadingsService.semCourse = course.Sem_Periodo;
    this.teacherHeadingsService.yearCourse = course.Sem_Anno;

    this.teacherHeadingsService.getHeadings().subscribe((resp: any) => {

      const answer = resp;
      
      
      for(let heading of answer){
        
        this.teacherHeadingsService.headings.push(heading);
      }
      

      this.router.navigate(['t-index/headings', course.Curso_Codigo]);
      
    });

    

  }


  ToEvaluation(courseCode: number){

    this.router.navigate(['t-index/evaluation', courseCode]);
  }


  goTeacherIndex(){
    

  }

}
