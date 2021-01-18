import { Component, OnInit } from '@angular/core';
import { TeacherHeadingsService } from 'src/app/services/teacher-headings.service';

@Component({
  selector: 'app-headings',
  templateUrl: './headings.component.html',
  styleUrls: ['./headings.component.css']
})
export class HeadingsComponent implements OnInit {

  headings: any[] = [];

  constructor(private teacherHeadingsService: TeacherHeadingsService) { }

  ngOnInit(): void {

    this.headings = this.teacherHeadingsService.headings;
    console.log(this.headings);
  }

}
