import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculateBudgetService } from '../shared/services/calculate-budget.service';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent implements OnInit, AfterViewInit {
  @Output() public addPanelPrice = new EventEmitter<number>();

  // Formulario del panel opción web
  webPanelForm: FormGroup;

  constructor(private fb: FormBuilder, private webPanelService: CalculateBudgetService, private modalService: NgbModal) {
    //Formulario
    this.webPanelForm = this.fb.group({
      numPages: [0, [this.minimumValueValidator]],
      numLanguages: [0, [this.minimumValueValidator]]
    });
    this.panelPrice();

  }
  minimumValueValidator(control: FormControl) {
    const value = control.value;
    return value >= 1 ? null : { minValue: true };
  }
  ngAfterViewInit(): void {
    this.panelPrice();

  }
  ngOnInit(): void {

  }
  panelPrice() {
    // Captar valores del formulario para enviar a calcular al servicio
    let numPages: number = this.webPanelForm.get("numPages")?.value;
    let numLanguages: number = this.webPanelForm.get("numLanguages")?.value;
    // Enviar a calcular al servicio
    let webPanelPrice = this.webPanelService.calculateWebPanel(numPages, numLanguages);
    // Enviar al componente padre
    this.addPanelPrice.emit(webPanelPrice);

  }

  // Exercici 3
  increaseNumPages() {
    let numPages = this.webPanelForm.get('numPages')?.value;
    // Actualizar el valor del campo del formulario con setValue
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
