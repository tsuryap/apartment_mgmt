import { Component, OnInit } from '@angular/core';
import { SideNavService } from './side-nav.service';

@Component({
  selector: 'admin-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  providers : [SideNavService]
})
export class SideNavComponent implements OnInit {


  sideNavInfo: any;
  constructor(public sideNavServ: SideNavService) { }

  ngOnInit() {
    this.sideNavInfo = this.sideNavServ.getSideNavList();
  }

}
