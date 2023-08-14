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

  constructor(private budgetService: CalculateBudgetService) {

  }
  ngOnInit(): void {
    // this.budgets = this.budgetService.budgetsList;
    this.budgetService.budget$.subscribe((resp) => {
      this.budgets = [...resp];
    });


  }
}
