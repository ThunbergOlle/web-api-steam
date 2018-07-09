const request = require('request');
const typeofjs = require('./typeof');

module.exports = (steam64id, apikey, callback) => {
    if(typeofjs(steam64id) && typeofjs(apikey) !== undefined){
        request({
            uri: '/ISteamUser/GetPlayerBans/v1',
            baseUrl: 'http://api.steampowered.com/',
            qs: {
                key: apikey,
                steamids: steam64id
            }
        }, (err, res, body) => {
            if(err) callback("There was an error making your request.");
            let parse = JSON.parse(body);
            let data = parse.players[0];
            callback(null, data);
            
        });
    } else {
        callback("Please set the input values as a valid string value.");
    }
}