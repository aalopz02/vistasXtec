import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})


export class StudentMainComponent implements OnInit {

  private _curso:string;  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

   get curso(): string {
    return this._curso;}
   set curso(value: string) {
    this._curso = value;
}
  onClick(curso:string){
    this._curso=curso;
    console.log(this._curso);
    this.router.navigateByUrl('/student-docs');
  }

}
