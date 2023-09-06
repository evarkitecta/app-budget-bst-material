import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { WellcomeComponent } from './wellcome/wellcome.component';

import { CalculateBudgetService } from './shared/services/calculate-budget.service';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    HomeComponent,
    ModalComponent,
    PanelComponent,
    WellcomeComponent
  ],
  providers: [
    CalculateBudgetService
  ],
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ]
})
export class AppModule { }
