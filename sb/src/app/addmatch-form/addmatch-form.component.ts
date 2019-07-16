import { Component, OnInit } from '@angular/core';
import { AddMatches } from './addmatches';
@Component({
  selector: 'app-addmatch-form',
  templateUrl: './addmatch-form.component.html',
  styleUrls: ['./addmatch-form.component.css']
})
export class AddmatchFormComponent implements OnInit {
	model=new AddMatches('Shubham','od144464','jhashubham28@gmail.com','jhashubham28'); 
  constructor() { }

  ngOnInit() {
  }

}
