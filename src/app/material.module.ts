import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
  ],
  exports: [
    MatCheckboxModule,
  ]
})
export class MaterialModule { }
