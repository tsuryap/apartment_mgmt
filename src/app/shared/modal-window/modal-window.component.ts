import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  title;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    console.log('title is ', this.title);
  }

}
