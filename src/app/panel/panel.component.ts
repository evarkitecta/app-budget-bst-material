import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CalculateBudgetService } from '../shared/services/calculate-budget.service';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Output() public addPanelPrice = new EventEmitter<number>();

  // Formulario del panel opción web
  webPanelForm: FormGroup;

  constructor(private fb: FormBuilder, private webPanelService: CalculateBudgetService, private modalService: NgbModal) {
    //Formulario
    this.webPanelForm = this.fb.group({
      numPages: [1],
      numLanguages: [1]
    });
    this.panelPrice();
    // this.webPanelForm.valueChanges.subscribe(() => {
    //   this.panelPrice();
    // });
    // this.webPanelForm.valueChanges.subscribe(() => {
    //   const webPanelPrice = this.webPanelService.calculateWebPanel(this.webPanelForm.value.numPages, this.webPanelForm.value.numLanguages);
    //   this.addPanelPrice.emit(webPanelPrice);
    // });

  }
  ngOnInit(): void {

    this.panelPrice();
  }
  panelPrice() {
    // Captar valores del formulario para enviar a calcular al servicio
    let numPages: number = this.webPanelForm.get("numPages")?.value;
    let numLanguages: number = this.webPanelForm.get("numLanguages")?.value;
    // Enviar a calcular al servicio
    let webPanelPrice = this.webPanelService.calculateWebPanel(numPages, numLanguages);
    // Enivar al componente padre
    this.addPanelPrice.emit(webPanelPrice);
  }

  // Exercici 3
  increaseNumPages() {
    let numPages = this.webPanelForm.get('numPages')?.value;
    this.webPanelForm.get('numPages')?.setValue(++numPages);
    this.panelPrice();
  }

  reduceNumPages() {
    let numPages = this.webPanelForm.get('numPages')?.value;

    if (numPages > 1) {
      this.webPanelForm.get('numPages')?.setValue(--numPages)

    };
    this.panelPrice();
  }


  increaseNumLanguages() {
    let numLanguages = this.webPanelForm.get('numLanguages')?.value;
    this.webPanelForm.get('numLanguages')?.setValue(++numLanguages);
    this.panelPrice();
  }


  reduceNumLanguages() {
    let numLanguages = this.webPanelForm.get('numLanguages')?.value;
    if (numLanguages > 1) {
      this.webPanelForm.get('numLanguages')?.setValue(--numLanguages)
    };
    this.panelPrice();
  }

  // Exercici 5
  @ViewChild(ModalComponent) modal!: ModalComponent;

  openWindow1() {
    this.modal.openWindow1();
  }

  openWindow2() {
    this.modal.openWindow2();
  }

}
