import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FlatMemberComponent } from './flat-member/flat-member.component';
import { BuzzComponent } from './buzz/buzz.component';

const routes: Routes = [
      {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: 'member',
            component: FlatMemberComponent
          },
          {
            path: 'vendor',
            component: FlatMemberComponent
          },
          {
            path: 'buzz',
            component: BuzzComponent
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
