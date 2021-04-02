import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // <-- *ngFor lives here
import { FormsModule } from '@angular/forms'; // <-- [(ngModel)] lives here
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
