import { Component, OnInit } from '@angular/core';
import { StudentInterface } from '../StudentInterfaceFile';
import { StudentConstant } from '../fAkePI'

@Component({
  // The selector below is what we will use to pull this entire component to app.component.html
  selector: 'students-component-selector',
  // The path below is where we are pushing the following exported class 
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit { 
  // What we export from here gets imported elsewhere, viz. the AppModule via students.component.html
  // All components are also declared in app.module.ts to render
  StudentVariable: StudentInterface = {
    ranking: 1,
    name: 'Marquis',
    age: 31,
    feedback: 'Smart, but talks too much!',
  }
  heroes = StudentConstant;

  constructor() { }

  ngOnInit(): void {
  }

}
