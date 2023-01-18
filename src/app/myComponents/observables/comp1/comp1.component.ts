import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: "app-comp1",
  templateUrl: "./comp1.component.html",
  styleUrls: ["./comp1.component.css"],
})
export class Comp1Component {

  constructor(private _designUtility: DesignUtilityService) { }
  
  onChange(uname) {
    console.log(uname.value);
    this._designUtility.username.next(uname.value);
  }
}
