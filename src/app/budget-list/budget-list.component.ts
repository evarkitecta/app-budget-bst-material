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
  public filteredBudgets: Budget[] = [];
  // public sortedByName: Boolean = false;
  // public sortedByDate: Boolean = false;
  constructor(private budgetService: CalculateBudgetService) {

  }
  ngOnInit(): void {
    this.budgets = this.budgetService.budgetsList;
    // this.budgetService.budget$.subscribe((resp) => {
    //   this.budgets = [...resp];
    // });
  }

  sortByName() {
    // this.budgets = this.budgets.sort((a: Budget, b: Budget) => {
    this.budgets.sort((a: Budget, b: Budget) => {
      const nameA = a.budgetName.toLowerCase();
      const nameB = b.budgetName.toLowerCase();
      return nameA.localeCompare(nameB);
      //console.log('ordenarPorNombre ' + nombreA + nombreB )
      // if (nameA < nameB) {
      //   return -1;
      // }
      // if (nameA > nameB) {
      //   return 1;
      // }
      // return 0;
    });
    // this.sortedByDate = false;
    // this.sortedByName = true;
  }
  sortByCustomer() {
    // this.budgets = this.budgets.sort((a: Budget, b: Budget) => {
    this.budgets.sort((a: Budget, b: Budget) => {
      const nameA = a.customer.toLowerCase();
      const nameB = b.customer.toLowerCase();
      return nameA.localeCompare(nameB);
      //console.log('ordenarPorNombre ' + nombreA + nombreB )
      // if (nameA < nameB) {
      //   return -1;
      // }
      // if (nameA > nameB) {
      //   return 1;
      // }
      // return 0;
    });
    // this.sortedByDate = false;
    // this.sortedByName = true;
  }

  sortByDate() {
    // this.budgets = this.budgets.sort((a: Budget, b: Budget) => {
    //   return new Date(b.date) - new Date(a.date);
    // });
    //*Ordenado de más reciente a más antiguo
    this.budgets.sort((a: Budget, b: Budget) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    // this.sortedByDate = true;
    // this.sortedByName = false;
  }


}
