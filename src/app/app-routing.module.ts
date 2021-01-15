import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './teacher/index/index.component';
import { DocumentsComponent } from './teacher/documents/documents.component';
import { HeadingsComponent } from './teacher/headings/headings.component';
import { EvaluationComponent } from './teacher/evaluation/evaluation.component';
import { FolderComponent } from './teacher/documents/folder/folder.component';
 
const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 't-index', component: IndexComponent},
  { path: 't-index/documents/:id', component: DocumentsComponent},
  { path: 't-index/headings/:id', component: HeadingsComponent},
  { path: 't-index/evaluation/:id', component: EvaluationComponent},
  { path: 't-index/documents/:id/:folder', component: FolderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
