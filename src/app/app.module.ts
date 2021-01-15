import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './teacher/index/index.component';
import { DocumentsComponent } from './teacher/documents/documents.component';
import { HeadingsComponent } from './teacher/headings/headings.component';
import { EvaluationComponent } from './teacher/evaluation/evaluation.component';
import { FolderComponent } from './teacher/documents/folder/folder.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    DocumentsComponent,
    HeadingsComponent,
    EvaluationComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
