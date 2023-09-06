import { Component, ViewChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {

  @ViewChild("modal1", { static: false })
  modal1!: TemplateRef<any>;
  @ViewChild("modal2", { static: false })
  modal2!: TemplateRef<any>;

  constructor(private modalService: NgbModal) { }

  openWindow1() {
    this.modalService.open(this.modal1, { centered: true });
  }

  openWindow2() {
    this.modalService.open(this.modal2, { centered: true });
  }
}
