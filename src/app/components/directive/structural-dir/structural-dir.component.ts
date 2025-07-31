import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  isDiv1Visiable: boolean = true;
  isDiv2Visiable: boolean = true;

  num1: string = "";
  num2: string = "";
  isActive: boolean = true;
  selectedState: string = "";

  cityArray: string[] = ['Delhi', 'Gorakhpur', 'Noida', 'Mathura', 'Deoria'];

  studentList: any[] = [
    {studId: 12, name: 'AAA', city:'Delhi', isActive: false},
    {studId: 22, name: 'BBB', city:'Gorakhpur', isActive: false},
    {studId: 32, name: 'CCC', city:'Lucknow', isActive: true},
    {studId: 42, name: 'DDD', city:'Mathura', isActive: false},
    {studId: 56, name: 'EEE', city:'Deoria', isActive: false},
    {studId: 62, name: 'FFF', city:'Noida', isActive: false},
  ]

  showDiv1(){
    this.isDiv1Visiable = true;
  }

  hideDiv1(){
    this.isDiv1Visiable = false;
  }

  toggleDiv2(){
    this.isDiv2Visiable = !this.isDiv2Visiable;
  }
}
