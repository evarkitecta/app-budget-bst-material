import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculateBudgetService } from '../shared/services/calculate-budget.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = '¿Qué quieres hacer?';

  public generalPrice: number = 0;
  public webPanelPrice: number = 0;
  public totalBudgetPrice: number = 0;
  budgetForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private calculateService: CalculateBudgetService) {
    this.budgetForm = this.formBuilder.group({
      webChecked: [false],
      seoChecked: [false],
      googleAdsChecked: [false],
    });
  }
  ngOnInit(): void {

  }

  addPrice(): number {
    this.generalPrice = 0;

    if (this.budgetForm.value.webChecked) {
      this.generalPrice += this.calculateService.priceWeb;
    }
    if (this.budgetForm.value.seoChecked) {
      this.generalPrice += this.calculateService.priceSEO;
    }
    if (this.budgetForm.value.googleAdsChecked) {
      this.generalPrice += this.calculateService.priceGoogleAds;
    }
    return this.generalPrice
  }

  receivePanelPrice(price: number): void {
    this.webPanelPrice = price;
    this.calculateBudget()
  }

  calculateBudget(): void {
    this.totalBudgetPrice = this.addPrice() + this.webPanelPrice
  }
}
