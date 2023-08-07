import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateBudgetService {
  public priceWeb: number = 500;
  public priceSEO: number = 300;
  public priceGoogleAds: number = 200;

  calculateWebPanel(numPages: number, numLanguages: number) {
    return numPages * numLanguages * 30
  }

  constructor() { }
}
