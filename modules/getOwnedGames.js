const request = require('request');
const tjs = require('./typeof');

module.exports = (steam64id, apikey, callback) => {
  if(tjs(steam64id) && tjs(apikey) !== undefined){
    request({
      uri: '/IPlayerService/GetOwnedGames/v0001',
      baseUrl: 'http://api.steampowered.com/',
      qs: {
        key: apikey,
        steamid: steam64id
      }
    }, (err, res, body) => {
      if(err) callback("There was an error making your request.");
      let parse = JSON.parse(body);
      let data = parse.response;
      callback(null, data);
    });
  }
}
