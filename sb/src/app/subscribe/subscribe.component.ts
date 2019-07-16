import { Component, OnInit } from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
	subscribeimage='./assets/img/subscribe-now.png';
	person: Person;
onSubmit(value){
		this.person = new Person(value.name,value.email,value.age,value.password);
		}
  constructor() { }

  ngOnInit() {
  }

}

