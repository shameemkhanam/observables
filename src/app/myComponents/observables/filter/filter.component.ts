import { Component, OnInit } from '@angular/core';
import { from, toArray, filter } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{

  dataArr = [
    {id:1, name:'nme1', gender:'male'},
    {id:2, name:'name2', gender:'female'},
    {id:3, name:'name3', gender:'male'},
    {id:4, name:'name4', gender:'male'},
    {id:5, name:'name5', gender:'female'},
    {id:6, name:'name6', gender:'male'},
    {id:7, name:'me7', gender:'male'},
    {id:8, name:'name8', gender:'female'},
    {id:9, name:'name9', gender:'male'},
    {id:10, name:'name10', gender:'male'}
  ];

  data;
  data2;
  data3;

  constructor() { }
  
  ngOnInit(): void {
    const source = from(this.dataArr);

    //ex 01 - filter by length

    source.pipe(
      filter(member => member.name.length>4),toArray())
      .subscribe((res) => {
      console.log(res);
      this.data = res;
      });
    
    //ex 02 - filter by gender

    source.pipe(
      filter(item => item.gender == 'female'),
      toArray())
      .subscribe((res) => {
      console.log(res);
      this.data2 = res;
      });
    
    //ex 03 - filter by nth item

    source.pipe(
      filter(item => item.id <= 6),
      toArray())
      .subscribe((res) => {
      console.log(res);
      this.data3 = res;
    });
  }

}
