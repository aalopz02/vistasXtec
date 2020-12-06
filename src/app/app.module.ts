import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionCursosComponent } from './gestion-cursos/gestion-cursos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GestionCursosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'ng-cli-universal'}),
    RouterModule.forRoot([
      {path :'gestion-cursos', component : GestionCursosComponent}
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
