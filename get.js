const Twit = require('twit')
var config = require('./config')
var T = new Twit(config);

var tweetCount=1;
(async () => {
    
    //Get screen names of all users that a specific user is following

    var params = { user_id: '1373202458', count: 200 }
    function getData (err, data, response) 
    {
      console.log("MLab437 is following " + data.users.length + " users")
    
      for(var i=0; i<data.users.length; i++)
      { console.log( data.users[i].screen_name )
      }
      console.log()
    }
    T.get('friends/list', params , getData); 

    //Get screen names of all users following a specific user
    T.get('followers/list', { user_id: '1373202458', count: 200 },  function (err, data, response) {
    
      console.log(data.users.length + " users are following MLab437")

      for(var i=0; i<data.users.length; i++)
      { console.log( data.users[i].screen_name )
      }
      console.log()
    })


    //Getting tweets that satisfy conditions
     T.get('search/tweets', { q: '#gme since:2021-03-05', count: 20 }, function(err, data, response) {
       const tweets = data.statuses
      .filter(tweet => tweet.text.includes("🚀"))
      .map(tweet => "("+ tweetCount++ + ") " + tweet.user.screen_name + " : " + tweet.text+"\n")
      //console.log(tweets);  
      
      for(var i=0; i<tweets.length; i++)
        console.log(tweets[i]); 
     })

})();