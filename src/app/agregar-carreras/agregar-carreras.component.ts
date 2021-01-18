import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarreraService } from '../services/carrera.service';

@Component({
  selector: 'app-agregar-carreras',
  templateUrl: './agregar-carreras.component.html',
  styleUrls: ['./agregar-carreras.component.css']
})
export class AgregarCarrerasComponent implements OnInit {
  carrera: FormGroup;
  error : string;
  constructor(private formBuilder: FormBuilder, private carreraService : CarreraService) { }

  ngOnInit(): void {
    this.carrera = this.formBuilder.group({
      nombreCarrera: ['', Validators.required]});

  }
  carreraSubmit() {
    if (this.carrera.invalid) {
        this.error = "falta el nombre";
        return;
      }
    this.carreraService.post(this.carrera.value["nombreCarrera"]).subscribe(data => this.error = data);
    this.carrera.reset();
  }

}
