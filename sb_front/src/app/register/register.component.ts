import { Component, OnInit } from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	registerimage='./assets/img/register-now.png';
	person: Person;
onSubmit(value){
		this.person = new Person(value.name,value.email,value.age,value.password);
		}
  constructor() { }

  ngOnInit() {
  }

}

