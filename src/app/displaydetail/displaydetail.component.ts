import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaydetail',
  templateUrl: './displaydetail.component.html',
  styleUrls: ['./displaydetail.component.css']
})
export class DisplaydetailComponent implements OnInit {
  displayVal = false;
  logs = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleDetail() {
    this.displayVal = !this.displayVal;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }
}
