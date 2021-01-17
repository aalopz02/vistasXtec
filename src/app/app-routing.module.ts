import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './teacher/index/index.component';
import { DocumentsComponent } from './teacher/documents/documents.component';
import { HeadingsComponent } from './teacher/headings/headings.component';
import { EvaluationComponent } from './teacher/evaluation/evaluation.component';
import { FolderComponent } from './teacher/documents/folder/folder.component';
import { VentanaAdminComponent } from './ventana-admin/ventana-admin.component';
import { GestionCursosComponent } from './gestion-cursos/gestion-cursos.component';
import { AdminCrea } from './admin-crea/admin-crea.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 't-index', component: IndexComponent},
  { path: 't-index/documents/:id', component: DocumentsComponent},
  { path: 't-index/headings/:id', component: HeadingsComponent},
  { path: 't-index/evaluation/:id', component: EvaluationComponent},
  { path: 't-index/documents/:id/:folder', component: FolderComponent},
  { path: 'ventana-admin', component: VentanaAdminComponent},
  { path: 'gestion-cursos', component: GestionCursosComponent},
  { path: 'admin-crea', component: AdminCrea}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
