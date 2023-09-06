import { Injectable } from '@angular/core';
import { Budget } from '../interfaces/budget.interface';

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
  public budgets = [...this.budgetsList]

  addBudget(name: string, customer: string, price: number): void {
    const budget: Budget = {
      budgetName: name,
      customer: customer,
      price: price,
      date: new Date()
    }
    this.budgetsList.push(budget);
    console.log("budgetsList", this.budgetsList)
    console.log("budgets", this.budgets)
  }

}
