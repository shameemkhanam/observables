import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  obsMsg;
  videoSubscription: Subscription;

  constructor(private _designUtility: DesignUtilityService) { }
  
  ngOnInit() {
    const broadcastVideos = interval(1000);
    this.videoSubscription = broadcastVideos.subscribe((res) => {
      console.log(res);
      this.obsMsg = 'Video ' + res;
      this._designUtility.print(this.obsMsg, 'elContainer');

      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
  

}
