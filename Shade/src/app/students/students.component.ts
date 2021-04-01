import { Component, OnInit } from '@angular/core';
import { StudentInterface } from '../StudentInterfaceFile';

@Component({
  // The selector below here is what we will use to pull this component in app.component.html
  selector: 'students-component-selector',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  // What we export from here gets imported elsewhere, viz. the AppModule via students.component.html
  studentClass: StudentInterface = {
    ranking: 1,
    name: 'Marquis',
    age: 31,
    feedback: 'Smart, but talks too much!',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
