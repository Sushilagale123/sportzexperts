import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { FooterSidebarComponent } from './footer-sidebar/footer-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LatestPostComponent } from './latest-post/latest-post.component';
import { WorldNewsComponent } from './world-news/world-news.component';
import { SportsGalleryComponent } from './sports-gallery/sports-gallery.component';
import { PopularPostComponent } from './popular-post/popular-post.component';
import { VideoPostComponent } from './video-post/video-post.component';
import { OlderPostComponent } from './older-post/older-post.component';
import { EntertainmentPostComponent } from './entertainment-post/entertainment-post.component';
import { NewslaterComponent } from './newslater/newslater.component';
import { FindOnFbComponent } from './find-on-fb/find-on-fb.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

import { ClockComponent } from './clock/clock.component';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { AddmatchFormComponent } from './addmatch-form/addmatch-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TeamsComponent } from './teams/teams.component';
import { AddTeamsComponent } from './add-teams/add-teams.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubscribeComponent } from './subscribe/subscribe.component';



/*For authentication*/
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com")    
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("561602290896109")
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider("LinkedIn-client-Id", false, 'en_US')
  }
]);

export function provideConfig() {
  return config;
}
/*Authentication part ends*/

/*Translate function for AOT*/
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    MainSectionComponent,
    FooterSidebarComponent,
    FooterComponent,
    LatestPostComponent,
    WorldNewsComponent,
    SportsGalleryComponent,
    PopularPostComponent,
    VideoPostComponent,
    OlderPostComponent,
    EntertainmentPostComponent,
    NewslaterComponent,
    FindOnFbComponent,
    CalendarComponent,
    SocialButtonsComponent,
    NotFoundComponent,
    ClockComponent,
    MatchesComponent,
    PlayersComponent,
    ContactUsComponent,
    AboutUsComponent,
    TournamentsComponent,
    AddmatchFormComponent,
    RegisterComponent,
    LoginComponent,
    AdminDashboardComponent,
    TeamsComponent,
    AddTeamsComponent,
    PageNotFoundComponent,
    SubscribeComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
     HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    ],
     exports: [TranslateModule],

  providers: [{
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
