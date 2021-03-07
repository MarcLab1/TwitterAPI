const Twit = require('twit')

var config = require('./config')
var T = new Twit(config);

setInterval(tweetIt, 1000*10)

function tweetIt() {

    var r = Math.floor(Math.random()*100);

     T.post('statuses/update', { status: 'A random number = ?'}, function(err, data, response) {
        if(err)
        {
          console.log("Error\n" + err.message);
        }
        else{
            console.log("Success");
            console.log("Tweet # = " + data.id)
            console.log("Tweet Text = " + data.text)
        }
        
    })
}

