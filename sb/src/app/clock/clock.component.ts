import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  clock = Observable.interval(1000).map(()=>{return new Date()});
  constructor() { }

  ngOnInit() {
  	
  }
 
}
