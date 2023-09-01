import { Injectable, OnInit } from '@angular/core';
import { Budget } from '../interfaces/budget.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// *Lo último que he puesto es el método OnInit (está pendiente de implentar si fuese necesario. Intento copiar el array budgetsList para poder ordenar la copia sin alterar el array original).Quería ponerlo dentro del método OnInit para que se haga la copia porque ahora no me ha funcionado. No ordena si pongo budgets.
export class CalculateBudgetService implements OnInit {
  public priceWeb: number = 500;
  public priceSEO: number = 300;
  public priceGoogleAds: number = 200;

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  calculateWebPanel(numPages: number, numLanguages: number) {
    return numPages * numLanguages * 30
  }

  // Exercici 6
  public budgetsList: Budget[] = [];
  public budgets = [...this.budgetsList]
  // budget$ = new Subject<any>

  addBudget(name: string, customer: string, price: number): void {
    const budget: Budget = {
      budgetName: name,
      customer: customer,
      price: price,
      date: new Date()
    }
    this.budgetsList.push(budget);
    // this.budget$.next(this.budgetsList)
    console.log("budgetsList", this.budgetsList)
    console.log("budgets", this.budgets)
  }

  // getBudgetsList() {
  //   return this.budgetsList;
  // }

}
