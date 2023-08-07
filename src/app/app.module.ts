import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { CalculateBudgetService } from './shared/services/calculate-budget.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    CalculateBudgetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
