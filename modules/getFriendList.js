const request = require('request');
const typeofjs = require('./typeof');
module.exports = (steam64id, apikey, callback) => {
    if(typeofjs(steam64id) && typeofjs(apikey) !== undefined){
        request({
            uri: '/ISteamUser/GetFriendList/v0001',
            baseUrl: 'http://api.steampowered.com/',
            qs: {
                key: apikey,
                steamid: steam64id,
                releationship: 'friend'
            }
        }, (err, res, body) => {
            if(err) callback("There was an error making your request. Check values like the steam64id or you're apikey.");
            var parse = JSON.parse(body);
            var friends = parse.friendslist.friends;
            callback(null, friends);
        });
    } else {
        callback("Please set your steam64id/apikey to a valid string value.")
    }
}