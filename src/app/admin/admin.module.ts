import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [AdminComponent, SideNavComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
