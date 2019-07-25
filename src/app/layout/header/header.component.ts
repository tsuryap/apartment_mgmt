import { Component, OnInit } from '@angular/core';
import { appGlobals } from '../../global/app.globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title =  appGlobals.appName;
  constructor() { }

  ngOnInit() {
  }

}
