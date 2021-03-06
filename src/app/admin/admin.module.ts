import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FlatMemberComponent } from './flat-member/flat-member.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { BuzzComponent } from './buzz/buzz.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminComponent, SideNavComponent, FlatMemberComponent, BuzzComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ]
})
export class AdminModule { }
