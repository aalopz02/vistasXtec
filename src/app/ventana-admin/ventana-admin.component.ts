import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventana-admin',
  templateUrl: './ventana-admin.component.html',
  styleUrls: ['./ventana-admin.component.css']
})

export class VentanaAdminComponent implements OnInit {
    title : string ;
    gestion_cursos : string ;
    inicializar_semestre : string ;
  
    constructor(private router: Router) {
        this.router.navigateByUrl('/admin-crea');
    }
  
    ngOnInit(): void {
    }
  
  }