const needle = require('needle');
var config = require('./config2')

const endpointURL = "https://api.twitter.com/2/users/by?usernames="
const token = 'token'
async function getRequest() {

    const params = {
        usernames: "TwitterDev,TwitterAPI", 
        "user.fields": "created_at,description", 
        "expansions": "pinned_tweet_id"
    }

    // this is the HTTP header that adds bearer token authentication
    const res = await needle('get', endpointURL, params, {
        headers: {
            "User-Agent": "v2UserLookupJS",
            "authorization": `Bearer ${token}`
        }
    })
    var ret="";
    for(var i=0; i<res.body.data.length; i++)
        ret+=res.body.data[i].description ;
    
        return ret;
   
}

(async () => {

        // Make request
        const response = await getRequest();
        console.dir(response, {
            depth: null,
            colors: true
        });

    process.exit();
})();