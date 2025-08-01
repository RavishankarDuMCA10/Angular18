import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor: string = 'bg-primary';
  isDiv2Active: boolean = false;
  num1:string = "";
  num2:string = "";
  isActive: boolean = true;

  customerStyle: any = {
    'color': 'white',
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
    'border-radius': '50%'
  };

  studentList: any[] = [
    {studId: 12, totalMarks:23, gender: 'male', name: 'AAA', city:'Delhi', isActive: false},
    {studId: 22, totalMarks:33, gender: 'female', name: 'BBB', city:'Gorakhpur', isActive: false},
    {studId: 32, totalMarks:67, gender: 'male', name: 'CCC', city:'Lucknow', isActive: true},
    {studId: 42, totalMarks:98, gender: 'female', name: 'DDD', city:'Mathura', isActive: false},
    {studId: 56, totalMarks:20, gender: 'male', name: 'EEE', city:'Deoria', isActive: false},
    {studId: 62, totalMarks:50, gender: 'male', name: 'FFF', city:'Noida', isActive: false},
  ]


  addRedClass(){
    this.div1BgColor = 'bg-danger';
  }

  addBlueClass(){
    this.div1BgColor = 'bg-primary';
  }

  toggleDiv2Class(){
    this.isDiv2Active = ! this.isDiv2Active;
  }

}
