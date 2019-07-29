import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
      {
        path: 'admin',
        component: AdminComponent,
        children: []
      }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class AdminRoutingModule { }
