import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from './design-utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Observables';

  exclusive: boolean = false;

  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit() {
    this._designUtility.exclusive.subscribe((res) => {
      this.exclusive = res;
    });
  }
}
