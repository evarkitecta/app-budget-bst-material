import { Component, OnInit } from '@angular/core';
import { CalculateBudgetService } from '../shared/services/calculate-budget.service';
import { Budget } from '../shared/interfaces/budget.interface';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  public budgets: Budget[] = [];
  public searchingWord: string = "";
  public filteredBudgets: Budget[] = [];

  constructor(private budgetService: CalculateBudgetService) {

  }
  ngOnInit(): void {
    this.budgets = this.budgetService.budgetsList;
  }

  sortByName() {

    this.budgets.sort((a: Budget, b: Budget) => {
      const nameA = a.budgetName.toLowerCase();
      const nameB = b.budgetName.toLowerCase();
      return nameA.localeCompare(nameB);
    });

  }
  sortByCustomer() {
    this.budgets.sort((a: Budget, b: Budget) => {
      const nameA = a.customer.toLowerCase();
      const nameB = b.customer.toLowerCase();
      return nameA.localeCompare(nameB);
    });
  }

  sortByDate() {
    //*Ordenado de más reciente a más antiguo
    this.budgets.sort((a: Budget, b: Budget) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }

  // *A partir de aquí revisar porque no funciona
  refresh() {
    this.budgets = this.budgetService.budgetsList;
  }
  resetOrder(): void {
    this.budgets = [...this.budgetService.budgets];
    console.log('budgets: ->', this.budgets);
    console.log('servicio ->', this.budgetService.budgets);
  }

  searchBudget() {
    console.log('___Presupuestos filtrados: ', this.filteredBudgets);
    if (this.searchingWord.trim() === '') {
      this.filteredBudgets = this.budgets;
    } else {
      this.filteredBudgets = this.budgets.filter((budget) =>
        budget.budgetName.toLowerCase().includes(this.searchingWord.toLowerCase())
      );
    }
    if (this.filteredBudgets.length === 0) {
      alert('not found');
    }
  }
}
