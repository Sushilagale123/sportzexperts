import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {Header1Component} from './header1/header1.component';
import {NotFoundComponent } from './not-found/not-found.component';
import { MainSectionComponent } from './main-section/main-section.component';
import {MatchesComponent} from './matches/matches.component'; 
import {PlayersComponent} from './players/players.component'; 
import {TournamentsComponent} from './tournaments/tournaments.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {TeamsComponent} from './teams/teams.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AddTeamsComponent} from './add-teams/add-teams.component';






const routes: Routes = [{ path: '',component: MainSectionComponent},
						{ path: 'Home',component: MainSectionComponent},
						{ path: 'Matches',component: MatchesComponent},
						{path: 'Players',component: PlayersComponent},
						{path: 'Teams',component: TeamsComponent},
						{path: 'Tournaments',component: TournamentsComponent},
						{path: 'Contact Us',component: ContactUsComponent},
						{path: 'About Us',component:AboutUsComponent},
						{path: 'Register',component:RegisterComponent},
						{path: 'Login',component:LoginComponent},
						{path: 'Admin',component:AdminDashboardComponent},
						{path: 'Teams/add-teams',component:AddTeamsComponent},
						{path: '**',component:PageNotFoundComponent},];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
	
	}
