const Twit = require('twit')

var config = require('./config')
var T = new Twit(config);

var tweetCount=1;
(async () => {
    
    //Streaming tweets that match keyword in the english language
    var stream = T.stream('statuses/filter', { track: 'gme', language: 'en'})
    stream.on('tweet', function (tweet) {
      console.log("("+ tweetCount++ + ") " + tweet.user.screen_name + " : " + tweet.text + "\n")
    })

})();