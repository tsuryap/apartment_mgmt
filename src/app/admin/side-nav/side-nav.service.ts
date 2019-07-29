import { Injectable } from '@angular/core';

@Injectable()
export class SideNavService {

  constructor() { }


  getSideNavList() {
     return [
       {
         name: 'Manage Members',
         routerLink: 'member'
       },
       {
        name: 'Manage Vendor',
        routerLink: 'vendor'
       }
     ];
  }
}
