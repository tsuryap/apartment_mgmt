import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-show-buzz',
  templateUrl: './show-buzz.component.html',
  styleUrls: ['./show-buzz.component.scss']
})
export class ShowBuzzComponent implements OnInit {
  buzz = [];
  constructor(public dashboardServ: DashboardService) { }

  ngOnInit() {
    this.getBuzzData();
  }

  getBuzzData() {
    this.dashboardServ.getBuzz().subscribe(res => {
      this.buzz =  res.map((item => {
          return item.payload.doc.data()['annoucement'];
      }));
   });
  }
}
