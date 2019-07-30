import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FlatMemberComponent } from './flat-member/flat-member.component';

const routes: Routes = [
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: 'member',
            component: FlatMemberComponent
          },
          {
            path: 'vendor',
            component: FlatMemberComponent
          }
        ]
      }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ],
  exports : [RouterModule]
})
export class AdminRoutingModule { }
