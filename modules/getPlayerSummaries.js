const request = require('request');
const typeofjs = require('./typeof');
module.exports = (steam64id, apikey, callback) => {
    if(typeofjs(steam64id) && typeofjs(apikey) !== undefined){
        
        request({
            uri: '/ISteamUser/GetPlayerSummaries/v0002',
            baseUrl: 'http://api.steampowered.com/',
            qs:{
                key: apikey,
                steamids: steam64id
            }
        }, (err, res, body)=> {
            if(err) callback("There was an error making your request. Check values like the steam64id or you're apikey.");
            callback(null, body);
        })
    }else {
        callback("Please set the steam64/apikey as a string value.")
    }
}