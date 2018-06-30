const request = require('request');
const convert = require('xml-to-json-promise');

module.exports = (appid, callback) => {
    if(typeof appid === 'string'){
        request({
            uri: '/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/',
            baseUrl: 'http://api.steampowered.com/',
            qs: {
                gameid: appid,
                format: 'xml'
            }
        }, (err, res, body) => {
            if(err)callback("There was an error getting the request for the GetGlobalAchievementPercentagesForApp module.");
            convert.xmlDataToJSON(body).then(json => {
                var achievement = json.achievementpercentages.achievements[0].achievement;
                callback(null, achievement);
            })
        })
    }else  {
        // Callback an error message.
        callback("Please set the appid value to a string type.");
    }
}