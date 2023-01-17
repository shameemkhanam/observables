import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit{
  obsMsg;

  constructor(private _designUtility: DesignUtilityService){}

  ngOnInit() {
    //of
    const obs1 = of('abc', 'def', 'ghi');
    obs1.subscribe((res) => {
      // console.log(res);
      this._designUtility.print(res, 'elContainer');
    });

    const obs2 = of({a:'abcd', b:'def', c:'ghi'});
    obs2.subscribe((res) => {
      this.obsMsg = res;
      // console.log('obsMsg', res);      
    });

    //from-array
    // const obs3 = from(['arritem1', 'arritem2', 'arritem3']);
    let arr = ['arritem1', 'arritem2', 'arritem3'];
    const obs3 = from(arr);
    obs3.subscribe((res) => {      
      // console.log(res);
      this._designUtility.print(res, 'elContainer3');
    });

    //from - promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('promise resolved');
      }, 3000);
    });
    promise.then((res) => {
      // console.log(res);      
    });

    const obs4 = from(promise);
    obs4.subscribe((res) => {
      console.log('from promise=> ',res);
      this._designUtility.print(res, 'elContainer4');
    });

    //from string
    const obs5 = from('Hello world');
    obs5.subscribe((res) => {
      console.log('from promise=> ', res);
      this._designUtility.print(res, 'elContainer5');
    });

  }
}
