const request = require('request');
const typeofjs = require('./typeof');
const convert = require('xml-to-json-promise');
module.exports = (appid, steam64id, apikey, callback) => {
    if(typeofjs(steam64id) && typeofjs(apikey) && typeofjs(appid)!== undefined){
        
        request({
            uri: '/ISteamUserStats/GetUserStatsForGame/v0002',
            baseUrl: 'http://api.steampowered.com/',
            qs:{
                key: apikey,
                appid: appid,
                steamid: steam64id
            }
        }, (err, res, body)=> {
            if(err) callback("There was an error making your request. Check values like the steam64id or you're apikey.");
            convert.xmlDataToJSON(body).then(json => {
                var achievement = json;
                callback(null, achievement);
            })
           
        })
    }else {
        callback("Please set the steam64/apikey as a string value.")
    }
}