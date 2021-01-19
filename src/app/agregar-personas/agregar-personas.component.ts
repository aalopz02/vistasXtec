import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudianteService } from '../services/estudiante.service';
import { ProfesorService } from '../services/profesores-service';

@Component({
  selector: 'app-agregar-personas',
  templateUrl: './agregar-personas.component.html',
  styleUrls: ['./agregar-personas.component.css']
})

//Componente para agregar un profesor nuevo o un estudiante nuevo

export class AgregarPersonasComponent implements OnInit {
  profesor: FormGroup;
  estudiante: FormGroup;
  error : string;

  constructor(
    private formBuilder: FormBuilder,
    private profesorService: ProfesorService,
    private estudianteService : EstudianteService
  ) { }

  ngOnInit(): void {
    this.profesor = this.formBuilder.group({
      nombreProfesor: ['', Validators.required],
      cedulaProfesor: ['', Validators.required],
      correoProfesor: ['', Validators.required], 
      contrasennaProfesor: ['', Validators.required]
  });
    this.estudiante = this.formBuilder.group({
      nombreEstudiante: ['', Validators.required],
      carnetEstudiante: ['', Validators.required],
      correoEstudiante: ['', Validators.required], 
      telefonoEstudiante: ['', Validators.required],
      contrasennaEstudiante: ['', Validators.required]
  });

  }

  profesorSubmit() {
    if (this.profesor.invalid) {
        this.error = "falta rellenar datos de profesor";
        return;
      }
    this.profesorService.post(this.profesor.value["nombreProfesor"],this.profesor.value["cedulaProfesor"],
                              this.profesor.value["correoProfesor"],this.profesor.value["contrasennaProfesor"]).subscribe(data => this.error = data);
    this.profesor.reset();
  }

  estudianteSubmit() {
    if (this.estudiante.invalid) {
        this.error = "falta rellenar datos de estudiante";
        return;
      }
      this.estudianteService.post(this.estudiante.value["nombreEstudiante"],this.estudiante.value["carnetEstudiante"],
                                  this.estudiante.value["correoEstudiante"],this.estudiante.value["telefonoEstudiante"],
                                  this.estudiante.value["contrasennaEstudiante"]).subscribe(data => this.error = data);
      this.estudiante.reset();
  }


}
