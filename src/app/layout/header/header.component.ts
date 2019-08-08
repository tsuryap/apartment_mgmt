import { Component, OnInit } from '@angular/core';
import { appGlobals } from '../../global/app.globals';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title =  appGlobals.appName;
  constructor(public userServ: UserService, public router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.userServ.clearStorage();
    this.router.navigate(['login']);
  }

}
