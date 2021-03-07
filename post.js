const Twit = require('twit')

var config = require('./config')
var T = new Twit(config);

(async () => {

  //tweet hello world!
  T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
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

  //remove tweet with specified id
  T.post('statuses/destroy/:id', { id: '1367975069406933002' }, function (err, data, response) {
      console.log("deleted")
    })

  
})();






