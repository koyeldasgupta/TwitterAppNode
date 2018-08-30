import { TwitterService } from './../services/twitter.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.scss']
})
export class PostTweetComponent implements OnInit {

  constructor(private twitterService : TwitterService, private router : Router) { }

  ngOnInit() {
  }

  postTweet(tweetText){
    let postBody={
      status: tweetText
    };
    this.twitterService.postTweet(postBody)
      .subscribe(res=>{
        this.router.navigate(['/'])
      });
    
  }

}
