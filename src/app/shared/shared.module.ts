import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoaderComponent, ModalWindowComponent, LoginComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [ModalWindowComponent],
  exports: [LoaderComponent, ModalModule, LoginComponent]
})
export class SharedModule { }
