import { TwitterService } from './../services/twitter.service';
import { Component } from '@angular/core';
import { Tweet } from '../common/tweet';

@Component({
  selector: 'app-search-tweets',
  templateUrl: './search-tweets.component.html',
  styleUrls: ['./search-tweets.component.scss']
})
export class SearchTweetsComponent  {

  public tweets : Tweet[] = [];
  public notFound : boolean;
  constructor(private twitterService:TwitterService) {}

 
  searchTweets(query){
    
    this.twitterService.getTweets(query)
      .subscribe(tweets =>{
        this.tweets = tweets
        this.notFound = (tweets.length == 0 ) ? true : false;
        console.log(this.notFound);
    });
  }
}