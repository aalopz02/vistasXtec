import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-cursos',
  templateUrl: './gestion-cursos.component.html',
  styleUrls: ['./gestion-cursos.component.css']
})
export class GestionCursosComponent implements OnInit {
  title : string ;
  listCodCursos: string[];
  listNomCursos:string[];
  listCreditos:string[];
  listCarrera:string[];
  verc:boolean;
  crearcurso:boolean;

  constructor() {
    this.listCarrera= [];
    this.listCodCursos= [];
    this.listCreditos= [];
    this.listNomCursos=[];
    this.title="Gestión de Cursos";
    this.verc=false;
    this.crearcurso=false;
  }

  ngOnInit(): void {
  }

  vc(){ 
    this.verc=!this.verc;
    
   }

   ncurso(codigo, curso, creditos, carrera){
     this.listCodCursos.push(codigo.value);
     this.listNomCursos.push(curso.value);
     this.listCreditos.push(creditos.value);
     this.listCarrera.push(carrera.value);
     codigo.value='';
     curso.value='';
     creditos.value='';
     carrera.value='';
     return false;
   }

   crearCurso(){
     this.crearcurso=!this.crearcurso;
   }

   delCurso(posicion){
     const listCodCursosaux=[];
     const listNomCursosaux=[];
     const listCreditosaux=[];
     const listdCarreraaux=[];
    for(var i=0; i<this.listCodCursos.length; i++){
      if (posicion!=i) {
       listCodCursosaux.push(this.listCodCursos[i]);
       listNomCursosaux.push (this.listNomCursos[i]);
       listCreditosaux.push (this.listCreditos[i]);
       listdCarreraaux.push (this.listCarrera[i]);
      }
      console.log(this.listCodCursos);
    };
    this.listCarrera=listdCarreraaux;
    this.listCodCursos=listCodCursosaux;
    this.listNomCursos=listNomCursosaux;
    this.listCreditos=listCreditosaux;
    this.verc=!this.verc;
    this.verc=!this.verc;
    return false;
   }

   verificar(){
     console.log(this.verc)
     return this.verc;
   }

}
