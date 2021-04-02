import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // <-- *ngFor and  lives here
import { FormsModule } from '@angular/forms'; // <-- [(ngModel)] lives here
import { AppComponent } from './app.component';
import { StudentsComponentExport } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponentExport,
    StudentDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
