import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // Basic data types in angular string, number, boolean, date

  courseName: string = "Angular 18";
  stateName: string = "Delhi";
  inputType = "radio";
  myClassName: string = "bg-primary";
  rollNo: number = 123;
  isIndian: boolean = false;
  currentDate: Date = new Date();
  
  firstName = signal("Ravi");

  constructor() {

  }

  changeCourseName() {
    this.courseName = "React Js";
    this.firstName.set("Shankar");
  }

  showAlert(message: string) {
    alert(message)
  }
}
