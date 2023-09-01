import { Component, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  // standalone: true,
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @ViewChild("modal1", { static: false })
  modal1!: TemplateRef<any>;
  @ViewChild("modal2", { static: false })
  modal2!: TemplateRef<any>;


  constructor(private modalService: NgbModal) { }

  // openVerticallyCentered(content: any) {
  //   this.modalService.open(content, { centered: true });
  // }

  openWindow1() {
    this.modalService.open(this.modal1, { centered: true });
  }

  openWindow2() {
    this.modalService.open(this.modal2, { centered: true });
  }
}
