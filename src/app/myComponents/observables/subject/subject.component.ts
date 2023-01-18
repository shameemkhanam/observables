import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy{
  username: string;

  constructor(private _designUtility: DesignUtilityService) {
    this._designUtility.username.subscribe((res) => {
      this.username = res;
    });
  };

  ngOnInit() {
    this._designUtility.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this._designUtility.exclusive.next(false);
  }
}
