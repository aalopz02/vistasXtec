import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cursoCrear } from '../models/crearCurso.model';
import { CarreraService } from '../services/carrera.service';
import { SemestreService } from '../services/crearSemestre.service';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-gestion-cursos',
  templateUrl: './gestion-cursos.component.html',
  styleUrls: ['./gestion-cursos.component.css']
})

//Componente para agregar cursos

export class GestionCursosComponent implements OnInit {
  title : string ;
  cursoCrear: FormGroup;
  listCodCursos: string[];
  listNomCursos:string[];
  listCreditos:string[];
  listCarrera:string[];
  listCarrerasDisponibles = [];
  verc:boolean;
  crearcurso:boolean;
  error: string;
  
  constructor( private formBuilder: FormBuilder,
    private semestreService : SemestreService,
    private carreraService : CarreraService,
    private cursoService : CursosService) {
    this.listCarrera= [];
    this.listCodCursos= [];
    this.listCreditos= [];
    this.listNomCursos=[];
    this.title="Gestión de Cursos";
    this.verc=false;
    this.crearcurso=false;
  }

  /**
   * Rellenado de datos default
   */
  ngOnInit(): void {
    this.carreraService.getAll().subscribe(data =>{
      this.listCarrerasDisponibles=data;
      console.log(this.listCarrerasDisponibles);
    });
    this.cursoCrear = this.formBuilder.group({
      codigo: ['', Validators.required],
      curso: ['', Validators.required],
      carreraForm: ['', Validators.required], 
      creditos: ['', Validators.required]
    });
  }

  /**
   * Método para hacer toogle entr cursos visibles o no
   */
  vc(){ 
    this.verc=!this.verc;
   }

   /**
    * Método listener del form, agrega a una lista cada dato digitado
    */
   ncurso(){
    if (this.cursoCrear.invalid) {
      this.error = "faltan datos" ;
      return;
    }
     this.listCodCursos.push(this.cursoCrear.value["codigo"]);
     this.listNomCursos.push(this.cursoCrear.value["curso"]);
     this.listCreditos.push(this.cursoCrear.value["creditos"]);
     this.listCarrera.push(this.cursoCrear.value["carreraForm"]);
     this.cursoCrear.reset();
     return false;
   }

   /**
   * Método para hacer toogle entr cursos visibles o no
   */
   crearCurso(){
     this.crearcurso=!this.crearcurso;
   }

   /**
   * Método para borrar un curso de la lista 
   */
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

   /**
    * Método que llama al servicio para crear un curso
    * @param indice : índice del curso seleccionado
    */
   subir(indice : number){
    console.log("subiendo: " + this.listNomCursos[indice]);
    this.cursoService.postCurso(new cursoCrear(this.listCodCursos[indice],this.listNomCursos[indice],this.listCreditos[indice],this.listCarrera[indice]));
   }


   verificar(){
     console.log(this.verc)
     return this.verc;
   }

}
