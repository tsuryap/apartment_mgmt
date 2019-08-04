import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalWindowComponent } from './modal-window/modal-window.component';

@NgModule({
  declarations: [LoaderComponent, ModalWindowComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  entryComponents: [ModalWindowComponent],
  exports: [LoaderComponent, ModalModule]
})
export class SharedModule { }
