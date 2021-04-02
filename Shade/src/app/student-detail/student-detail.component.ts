import { Component, OnInit, Input } from '@angular/core';
import { StudentInterface } from '../StudentInterfaceFile';

@Component({
  selector: 'student-detail-component-selector',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() StudentListVariable?: StudentInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
