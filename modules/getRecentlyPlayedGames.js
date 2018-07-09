// Get the recent played games of an user.
const request = require('request');
const typeofjs = require('./typeof');

module.exports = (steam64id, apikey, callback) => {
    if(typeofjs(steam64id) && typeofjs(apikey) !== undefined){
        request({
            uri: '/IPlayerService/GetRecentlyPlayedGames/v0001',
            baseUrl: 'http://api.steampowered.com/',
            qs: {
                key: apikey,
                steamid: steam64id,
                format: 'json'
            }
        }, (err, res, body) => {
            if(err) callback("There was an error making your request.");
            let parse = JSON.parse(body);
            let count = parse.response.total_count;
            let games = parse.response.games;
            let data = {
                count: count,
                games: games
            }
            callback(null, data);
        });
    } else {
        callback("Please set the input values as a valid string value.");
    }
}