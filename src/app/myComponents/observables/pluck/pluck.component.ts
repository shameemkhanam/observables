import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent implements OnInit {
  users = [
    { name: 'ass', age: 23 },
    { name: 'rass', age: 23 },
    { name: 'bass', age: 23 },
    { name: 'vass', age: 23 },
    { name: 'tass', age: 23 },
  ];

  data;

  constructor() {}

  ngOnInit() {
    from(this.users)
      .pipe(pluck('name'), toArray())
      .subscribe((res) => {
        this.data = res;
        console.log(res);
      });
  }
}
