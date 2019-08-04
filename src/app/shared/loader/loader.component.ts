import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  showLoader: boolean = false as boolean;
  constructor(public loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.loaderSubject.subscribe((res: boolean) => {
      this.showLoader = res;
    });
  }

}
