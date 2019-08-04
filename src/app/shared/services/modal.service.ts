import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Injectable({providedIn: 'root'})
export class ModalService {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {
  }

  show(params) {
    this.bsModalRef = this.modalService.show(ModalWindowComponent);
    this.bsModalRef.content.title = 'test';
  }
}
