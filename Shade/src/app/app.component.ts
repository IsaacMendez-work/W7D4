import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // To import this component class, use the {{placeholder}} to pull one of the below exports on an HTML page.
  title = 'Student Rankings';
}
