import { Component, OnInit } from '@angular/core';
import {Teams} from './add-teams';

@Component({
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: ['./add-teams.component.css']
})
export class AddTeamsComponent implements OnInit {
	team: Teams;
onSubmit(value){
		this.team = new Teams(value.id,value.name,value.no_players,value.flag,
			value.sport_id,value.achievement,value.home_ground,
			value.description,value.type,value.city_id,
			value.state_id,value.country_id,value.status,value.created,value.modified);
		}

  constructor() { }

  ngOnInit() {
  }

}
