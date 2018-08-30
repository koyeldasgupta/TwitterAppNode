
import { Component, OnInit } from '@angular/core';
import { TwitterService } from './../services/twitter.service';
import { UserProfile } from '../common/userProfile';

@Component({
  selector: 'app-home-timeline',
  templateUrl: './home-timeline.component.html',
  styleUrls: ['./home-timeline.component.scss']
})
export class HomeTimelineComponent implements OnInit {

  public user :UserProfile ={ 
      name : "",
      screenName: "",
      statusesCount: null ,
      followersCount: null ,
      following: null,
      profileImageUrl: "",
      tweets: []
    }
  
  constructor(private twitterService : TwitterService) { }

  ngOnInit() {
    this.twitterService.getUserTimeline()
      .subscribe(userProfile=>this.user = userProfile);
  }

}
