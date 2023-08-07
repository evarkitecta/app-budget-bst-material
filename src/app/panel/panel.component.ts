import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CalculateBudgetService } from '../shared/services/calculate-budget.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Output() public addPanelPrice = new EventEmitter<number>();

  // Formulario del panel opción web
  webPanelForm: FormGroup;

  constructor(private fb: FormBuilder, private webPanelService: CalculateBudgetService) {
    //Formulario
    this.webPanelForm = this.fb.group({
      numPages: [0],
      numLanguages: [0],
    });

    // this.webPanelForm.valueChanges.subscribe(() => {
    //   const webPanelPrice = this.webPanelService.calculateWebPanel(this.webPanelForm.value.numPages, this.webPanelForm.value.numLanguages);
    //   this.addPanelPrice.emit(webPanelPrice);
    // });

  }
  ngOnInit(): void {
    // Captar valores del formulario para enviar a calcular al servicio
    // const numPages: number = this.webPanelForm.value.numPages;
    // const numLanguages: number = this.webPanelForm.value.numLanguages;

    // this.webPanelPrice = this.webPanelService.calculateWebPanel(numPages, numLanguages);
    // console.log(this.webPanelPrice)
    // const numPages: number = this.webPanelForm.get("numPages")?.value;
    // const numLanguages: number = this.webPanelForm.get("numLanguages")?.value;
    // const webPanelPrice = this.webPanelService.calculateWebPanel(numPages, numLanguages);

    // this.addPanelPrice.emit(webPanelPrice)
    // console.log(webPanelPrice)
  }
  panelPrice() {
    const numPages: number = this.webPanelForm.get("numPages")?.value;
    const numLanguages: number = this.webPanelForm.get("numLanguages")?.value;
    const webPanelPrice = this.webPanelService.calculateWebPanel(numPages, numLanguages);
    this.addPanelPrice.emit(webPanelPrice);
  }

}
