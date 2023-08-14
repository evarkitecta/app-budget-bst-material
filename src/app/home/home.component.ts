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

  constructor(private formBuilder: FormBuilder, private budgetService: CalculateBudgetService) {
    this.budgetForm = this.formBuilder.group({
      webChecked: [false],
      seoChecked: [false],
      googleAdsChecked: [false],
      budgetName: ["", Validators.required],
      customer: ["", Validators.required]
    });
  }
  ngOnInit(): void {

  }

  addPrice(): number {
    this.generalPrice = 0;

    if (this.budgetForm.value.webChecked) {
      this.generalPrice += this.budgetService.priceWeb;
    }
    if (this.budgetForm.value.seoChecked) {
      this.generalPrice += this.budgetService.priceSEO;
    }
    if (this.budgetForm.value.googleAdsChecked) {
      this.generalPrice += this.budgetService.priceGoogleAds;
    }
    return this.generalPrice
  }

  receivePanelPrice(price: number): void {
    this.webPanelPrice = price;
    this.calculateBudget()
  }

  calculateBudget(): void {
    if (this.budgetForm.get('webChecked')?.value) {
      this.totalBudgetPrice = this.addPrice() + this.webPanelPrice
    } else {
      this.totalBudgetPrice = this.addPrice()
    }
  }
  addBudgetList() {
    //console.log('hola desde agregarPresupuesto');
    const name = this.budgetForm.get('budgetName')!.value;
    const customer = this.budgetForm.get('customer')!.value;
    const price = this.totalBudgetPrice;

    this.budgetService.addBudget(name, customer, price);
    //Resetear los valores del formulario
    this.budgetForm.reset();

    this.totalBudgetPrice = 0
    this.webPanelPrice = 0


    // console.log('agregarPresupuesto '+ this.totalFinalPrice)
  }
}

