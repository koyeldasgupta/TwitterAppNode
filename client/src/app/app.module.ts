import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Route, Routes } from '@angular/router';

import { TwitterService } from './services/twitter.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeTimelineComponent } from './home-timeline/home-timeline.component';
import { SearchTweetsComponent } from './search-tweets/search-tweets.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostTweetComponent } from './post-tweet/post-tweet.component';
import { TwitterDatePipe } from './common/twitter-date.pipe';

const routes : Routes = [
  {path : '', component : HomeTimelineComponent},
  {path : 'search/tweets', component : SearchTweetsComponent},
  {path : 'post/tweet' , component : PostTweetComponent},
  {path : '**', component : NotFoundComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeTimelineComponent,
    SearchTweetsComponent,
    NotFoundComponent,
    PostTweetComponent,
    TwitterDatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
     
  ],
  providers: [
    TwitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
