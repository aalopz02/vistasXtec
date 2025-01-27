import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import {FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { semestreModel } from '../models/semestre.model';
import { cursoModel } from '../models/curso.model';
import { profesorModel } from '../models/profesor.model';
import { excelService } from '../services/excel.service';
import { ProfesorService } from '../services/profesores-service';
import { EstudianteService } from '../services/estudiante.service';
import { CursosService } from '../services/cursos.service';
import { SemestreService } from '../services/crearSemestre.service';

/**
 * Ng module
 */
  @Component({
    selector: 'admin-crea-component',
    templateUrl: './admin-crea.component.html',
    styleUrls: ['./admin-crea.component.css']
  })
  //Component para iniciar un semestre
  export class AdminCrea implements OnInit {
    // Forms y componentes
    semestre: FormGroup;
    curso: FormGroup;
    grupo: FormGroup;
    secciones: FormGroup;
    evaluaciones: FormGroup;

    flagSemestreCreado = false;
    semestreCreado: semestreModel [] =[];
    flagCursoCreado = false;
    cursosCreados : cursoModel [] = [];
    grupos : any [] = [];

    error: string;

    profesores  =  [];
    estudiantes = [];
    periodosDef = ['1','2','V'];

    codCursPrueb = [];

    file:any;
    excel : string | ArrayBuffer;

  constructor( private formBuilder: FormBuilder,
      private router: Router,
      private loadfile: excelService,
      private profesorService: ProfesorService,
      private estudianteService : EstudianteService,
      private cursosService : CursosService,
      private semestreService : SemestreService
      ){}
  /**
   * on init
   */
  ngOnInit() {
  // Cargar datos al form

      this.profesorService.getAll().subscribe(data =>{
        this.profesores=data;
        console.log(this.profesores[0]);
      });

      this.estudianteService.getAll().subscribe(data =>{
        this.estudiantes=data;
        console.log(this.estudiantes[0]);
      });

      this.cursosService.getAll().subscribe(data =>{
        this.codCursPrueb=data;
        console.log(this.codCursPrueb[0]);
      });

      this.semestre = this.formBuilder.group({
        anno: ['', Validators.required],
        periodo: ['', Validators.required] 
        });
    this.curso = this.formBuilder.group({
        codigoCurso: ['', Validators.required],
        numeroGrupo: ['', Validators.required],
        profesor1: ['', Validators.required], 
        profesor2: ['']
    });
    this.grupo = this.formBuilder.group({
        carnet: ['', Validators.required]
    });
    }

    get fS() { return this.semestre.controls; }

    get fC() { return this.curso.controls; }

    get fG() { return this.grupo.controls; }
    /**
     * Cambio en archivo
     * @param e 
     */
    fileChanged(e) {
      this.file = e.target.files[0];
      this.filetostring(this.file);
  }
  /**
   * Convertir archivo a string
   * @param file a convertir a string
   */
  filetostring(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.excel = fileReader.result;
      console.log(this.excel);
    }
    fileReader.readAsText(this.file);;
  }
    
  /**
   * Listener de form para semestre
   */
    semestreSubmit() {
        if (this.semestre.invalid) {
            this.error = "falta rellenar datos de semestre";
            return;
          }
        this.semestreCreado.push(new semestreModel(this.semestre.value));
        this.flagSemestreCreado = true;
        this.semestre.disable();
        this.error = "";
    }

    /**
     * Listener de form de curso
     */
    cursoSubmit() {
        if (this.curso.invalid){
          console.log(this.curso.value);
            this.error = "falta rellenar datos del curso";
            return;
        }
        if (this.grupos.length == 0) {
          this.error = "falta agregar estudiantes al grupo";
          return;
        }
        if (this.curso.value["profesor1"] == this.curso.value["profesor2"]){
          this.error = "profesor auxiliar, igual al profesor principal";
          return;
        }
        this.cursosCreados.push(new cursoModel(this.curso.value,this.grupos));
        console.log(this.cursosCreados);
        this.grupos = [];
        this.flagCursoCreado = true;
        this.curso.reset();
        this.error = "";
      }

      /**
       * Listener de form de grupo
       */
    grupoSubmit() {
        if (this.grupo.invalid) {
            return;
          }
        if (this.grupos.includes(this.grupo.value)){
          this.error = "estudiante ya incluido en el grupo";
            return;
        }
        this.grupos.push(this.grupo.value);
        console.log(this.grupos);
        this.error = "";
      }
    
      /**
       * Función que se llama para agregar un curso completo al semestre seleccionado
       */
    subirSemestre(){
      console.log("semestre");
      this.cursosCreados.forEach(element => {
        this.semestreService.postCurso(element,this.semestreCreado[0]).subscribe(data => this.error=data)
      });
    }

    /**
     * Listener si el semestre se carga por archivo
     */
    done(){
        this.loadfile.cargarArchivo(this.excel);
        console.log("done");
    }
  }