import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventana-admin',
  templateUrl: './ventana-admin.component.html',
  styleUrls: ['./ventana-admin.component.css']
})

//Clase para mostrar un menú para las cosas que un administrador puede hacer
export class VentanaAdminComponent implements OnInit {
    title : string ;
    gestion_cursos : string ;
    inicializar_semestre : string ;
  
    constructor(private router: Router) {
       
    }
  
    ngOnInit(): void {
    }
  
  }