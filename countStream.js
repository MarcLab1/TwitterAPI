
const Twit = require('twit')
var config = require('./config')
var T = new Twit(config);

var tweetCount=0;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

var date = yyyy + "-" + mm + "-" + dd;
var params = "#gme since:"+date;

(async () => {
    
    //Streaming tweets that match keyword in the english language
    var stream = T.stream('statuses/filter', { track: 'lyme', language: 'en'})
    stream.on('tweet', function (tweet) {
        
        console.log(date + " Lyme tweet count = " + ++tweetCount);
    })

})();