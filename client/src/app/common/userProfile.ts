import { TweetInfo } from './tweetInfo';

export interface UserProfile{
    name : string;
    screenName: string;
    statusesCount: number;
    followersCount: number;
    following: number;
    profileImageUrl: string;
    tweets: TweetInfo[];
}