import { Component, OnInit } from '@angular/core';
import {Person} from './person';
// import { AuthService } from 'angular4-oauth-login';
// import { SocialUser } from 'angular4-oauth-login';
// import { FacebookLoginProvider, GoogleLoginProvider } from 'angular4-oauth-login';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService :AuthService) { }

  private user: SocialUser;
  private loggedIn: boolean;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
}
	loginimage='./assets/img/login.png';
	
  
  signInWithGoogle(): void
  {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signInWithFB(): void
    {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
    signOut(): void {
    this.authService.signOut();
  }
  
  

    person: Person;
    onSubmit(value){
    this.person = new Person(value.email,value.password);
    }

  
}
