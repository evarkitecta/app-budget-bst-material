import { Injectable } from '@angular/core';
import { Budget } from '../interfaces/budget.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateBudgetService {
  public priceWeb: number = 500;
  public priceSEO: number = 300;
  public priceGoogleAds: number = 200;

  constructor() { }
  calculateWebPanel(numPages: number, numLanguages: number) {
    return numPages * numLanguages * 30
  }

  // Exercici 6
  public budgetsList: Budget[] = [];
  budget$ = new Subject<any>

  addBudget(name: string, customer: string, price: number): void {
    const budget: Budget = {
      budgetName: name,
      client: customer,
      price: price
    }
    this.budgetsList.push(budget);
    this.budget$.next(this.budgetsList)
    console.log(this.budgetsList)
  }

  // getBudgetsList() {
  //   return this.budgetsList;
  // }
}
