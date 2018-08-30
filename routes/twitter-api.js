var express = require('express');
var twit = require('twitter');
var router = express.Router();
var path = require('path');

var twitter = new twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


//get user timeline
router.get('/user_timeline',function(req, res, next){
  var params = {screen_name: 'koyel_dg'};
  twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) 
      res.send(tweets);
  });
});

//get user home timeline
router.get('/home_timeline',function(req, res, next){
  twitter.get('statuses/home_timeline', function(error, tweets, response) {
    if (!error) 
      res.send(tweets);
    
  });
});

//post a new tweet
router.post('/post_tweet',function(req, res, next){
  twitter.post('statuses/update',req.body,function(error,tweetObj){
    if (!error) 
      res.send(tweetObj);
  });
});


//search tweets
router.get('/search/tweets', function(req, res, next) {
  var pattern = req.query.search;
  twitter.get('search/tweets', { q: pattern } , function(error, tweets, response){
    if(!error) 
    {
      console.log(tweets);
      res.send(tweets);
    }
  });
});


module.exports = router;

