import { Component, OnInit } from '@angular/core';
import { interval, Subscription, take, toArray, from, of } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit{

  users = [
    {name: 'ass', age:23},
    {name: 'rass', age:23},
    {name: 'bass', age:23},
    {name: 'vass', age:23},
    {name: 'tass', age:23},
  ];

  constructor(){}
  sourceSubs: Subscription;

  ngOnInit() {
    //ex 01
    // const source = interval(1000);
    // this.sourceSubs = source.pipe(
    //   take(5),
    //   toArray())
    //   .subscribe((res) => {
    //   console.log(res);
    //   // if (res >= 5) {
    //   //   this.sourceSubs.unsubscribe();
    //   // }
    //   });
    
    //ex 02
    // const source2 = from(this.users);
    // source2.pipe(toArray())
    //   .subscribe((res) => {
    //   console.log(res);
    // });
    
    //ex 03
    const source3 = of('one', 'two', 'three', 'four');
    source3.pipe(toArray())
      .subscribe((res) => {
        console.log(res);        
      });

  }

}
