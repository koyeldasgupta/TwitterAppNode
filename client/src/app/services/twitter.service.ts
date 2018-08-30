
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError , map } from 'rxjs/operators';

import { Tweet } from '../common/tweet';
import { UserProfile } from '../common/userProfile';
import { TweetInfo } from '../common/tweetInfo';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  private url : string = "http://localhost:3000";

  constructor(private http:Http) { }

  getUserTimeline() : Observable<UserProfile>{
    return this.http.get(this.url+'/user_timeline')
        .pipe(
          map(this.extractUserData),
          catchError(this.handleError)
        );
  }

  postTweet(postBody){
    return this.http.post(this.url+'/post_tweet',postBody)
      .pipe(
        map(res=>res.json()),
        catchError(this.handleError)
      );
  }

  getTweets(query:string) : Observable<Tweet[]> {
    return this.http.get(this.url+'/search/tweets/?search='+query)
        .pipe(
          map(this.extractTweetData),
          catchError(this.handleError)
        );
  }

  private handleError(error : Response){
    return throwError(error.status);
  }

 
  private extractTweetData (res){
    let tweets: Tweet[] = [];
    let list = res.json().statuses;

    for(let i in list){
      let tweet = list[i];
    
      let tweetData : Tweet = {
        name : tweet.user.name,
        screenName: tweet.user.screen_name,
        statusesCount: tweet.user.statuses_count,
        followersCount: tweet.user.followers_count,
        following: tweet.user.friends_count,
        profileImageUrl: tweet.user.profile_image_url,
        createdAt : tweet.created_at,
        status: tweet.text
      };
      tweets.push(tweetData);
    }
    return tweets;
    
  }

  private extractUserData (res){
    
    let body = res.json();
    let tweets : TweetInfo [] = [];

    for( let i in body){
      let status = body[i].text;
      let createdAt = body[i].created_at;
      tweets.push({'status': status, 'createdAt' : createdAt});
    }

    let userProfile : UserProfile = {
      name : body[0].user.name,
      screenName: body[0].user.screen_name,
      statusesCount: body[0].user.statuses_count,
      followersCount: body[0].user.followers_count,
      following: body[0].user.friends_count,
      profileImageUrl: body[0].user.profile_image_url,
      tweets: tweets
    };
    return userProfile;
  }
}
