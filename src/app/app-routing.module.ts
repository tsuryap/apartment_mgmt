import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { RouteGuard } from './shared/services/route.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RouteGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mode => mode.AdminModule),
    canActivate: [RouteGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
