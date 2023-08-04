import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = '¿Qué quieres hacer?';
  public totalPrice: number = 0;

  //*Primera opción para crear un formulario:
  // public budgetForm = new FormGroup({
  //   webChecked: new FormControl(false),
  //   seoChecked: new FormControl(false),
  //   googleChecked: new FormControl(false),
  // })
  // *Segunda opción para crear un formulario:
  budgetForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.budgetForm = this.formBuilder.group({
      webChecked: [false],
      seoChecked: [false],
      googleAdsChecked: [false],
    });
  }


  addPrice(): void {
    this.totalPrice = 0;

    if (this.budgetForm.value.webChecked) {
      this.totalPrice += 500;
    }
    if (this.budgetForm.value.seoChecked) {
      this.totalPrice += 300;
    }
    if (this.budgetForm.value.googleAdsChecked) {
      this.totalPrice += 200;
    }
  }
}
