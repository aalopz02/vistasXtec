import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-noticias',
  templateUrl: './gestion-noticias.component.html',
  styleUrls: ['./gestion-noticias.component.css']
})
export class GestionNoticiasComponent implements OnInit {

  noticiaForm:FormGroup;

  constructor(private formB: FormBuilder) { }

  ngOnInit(): void {
    this.noticiaForm = this.formB.group({
      titulo: ['', Validators.required],
      cuerpo: ['', Validators.required],
      fecha: ['', Validators.required],
      autor: ['', Validators.required],
      curso: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.noticiaForm.invalid) {
      return;
    }

  }
}
