import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionCursosComponent } from './gestion-cursos/gestion-cursos.component';
import { RouterModule } from '@angular/router';
import { VisualizeDocsComponent } from './Student/visualize-docs/visualize-docs.component';
import { NavbarStudentComponent } from './Student/navbar-student/navbar-student.component';
import { StudentMainComponent } from './Student/student-main/student-main.component';
import { StudentNewsComponent } from './Student/student-news/student-news.component';
import { StudentSendEvalComponent } from './Student/student-send-eval/student-send-eval.component';
import { StudentGradesComponent } from './Student/student-grades/student-grades.component';
import { StudentFileComponent } from './Student/student-file/student-file.component';
import { StudentDocsComponent } from './Student/student-docs/student-docs.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './teacher/index/index.component';
import { DocumentsComponent } from './teacher/documents/documents.component';
import { HeadingsComponent } from './teacher/headings/headings.component';
import { EvaluationComponent } from './teacher/evaluation/evaluation.component';
import { FolderComponent } from './teacher/documents/folder/folder.component';
import { CreateEvaluationComponent } from './teacher/evaluation/create-evaluation/create-evaluation.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    DocumentsComponent,
    HeadingsComponent,
    EvaluationComponent,
    FolderComponent,
    GestionCursosComponent,
    VisualizeDocsComponent,
    NavbarStudentComponent,
    StudentMainComponent,
    StudentNewsComponent,
    StudentSendEvalComponent,
    StudentGradesComponent,
    StudentFileComponent,
    StudentDocsComponent,
    CreateEvaluationComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'ng-cli-universal'}),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
    { path: 'gestion-cursos', component: GestionCursosComponent },
    { path: 'student-docs', component: VisualizeDocsComponent },
    { path: 'student-doc', component: StudentDocsComponent },
    { path: 'student-main', component: StudentMainComponent},
    { path: 'student-grades', component: StudentGradesComponent },
    { path: 'student-eval', component: StudentSendEvalComponent },
    { path: 'student-news', component: StudentNewsComponent },
    { path: 'student-exp', component: StudentFileComponent }
], { relativeLinkResolution: 'legacy' }),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
