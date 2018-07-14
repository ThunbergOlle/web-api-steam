const request = require('request');
const typeofjs = require('./typeof');

module.exports = (appid, apikey, callback) => {
  if(typeofjs(appid) && typeofjs(apikey) !== undefined) {
    request({
      uri: "/ISteamUserStats/GetSchemaForGame/v2",
      baseUrl: 'http://api.steampowered.com/',
      qs: {
        key: apikey,
        appid: appid
      }
    }, (err, res, body) => {
      if(err) callback("There was an error making your request.");
      let parse = JSON.parse(body);
      let data = parse.game;
      callback(null, data);
    })
  }else {
    callback("Please set the input values as a valid string value.");
  }
}
