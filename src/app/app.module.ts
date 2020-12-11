import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionCursosComponent } from './gestion-cursos/gestion-cursos.component';
import { RouterModule } from '@angular/router';
import { GestionNoticiasComponent } from './gestion-noticias/gestion-noticias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GestionCursosComponent,
    GestionNoticiasComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path :'gestion-cursos', component : GestionCursosComponent},
      {path :'gestion-noticias', component : GestionNoticiasComponent}
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
