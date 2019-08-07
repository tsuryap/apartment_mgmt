import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import * as _ from 'lodash';
import { defaultLocaleWeekdaysShort } from 'ngx-bootstrap/chronos/locale/locale.class';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RouteGuard   implements CanActivate {

  constructor(public userServ: UserService, private router: Router) {

  }

  // tslint:disable-next-line: no-unused-expression
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
   if (!this.userServ.getUserName()) {
    this.router.navigate(['login']);
   }
   return true;
  }

}
