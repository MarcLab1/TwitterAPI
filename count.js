const Twit = require('twit')
var config = require('./config')
var T = new Twit(config);

var tweetCount=0;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

var params = "#gme since:"+yyyy+"-"+mm+"-" + dd;
//'#gme since:2021-03-05'
(async () => {
    

     T.get('search/tweets', { q: params, count: 200 }, function(err, data, response) {
       const tweets = data.statuses
      .filter(tweet => tweet.text.includes("🚀"))
      
      for(var i=0; i<tweets.length; i++)
        tweetCount++

      console.log("Total tweets = " + tweetCount);  
     })

})();