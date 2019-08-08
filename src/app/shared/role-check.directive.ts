import { Directive, OnInit, ElementRef } from '@angular/core';
import { UserService } from './services/user.service';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[appRoleCheck]'
})
export class RoleCheckDirective  {


  constructor(private el: ElementRef, public userServ: UserService) {
    this.applyRoles();
  }

  applyRoles() {
    if (!this.userServ.isAdmin()) {
        this.el.nativeElement.style.display = 'none';
    }
  }



}
