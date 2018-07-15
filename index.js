// Imports here
// Read more about the api here: https://developer.valvesoftware.com/wiki/Steam_Web_API
module.exports.getGAchievements = require('./modules/getAchievementsPercentagesForApp');
module.exports.getPlayerInfo = require('./modules/getPlayerSummaries');
module.exports.getFriendList = require('./modules/getFriendList');
module.exports.getUserStats = require('./modules/getUserStatsForGame');
module.exports.getRecentGames = require('./modules/getRecentlyPlayedGames');
module.exports.getPlayerBans = require('./modules/getPlayerBans');
module.exports.getSchema = require('./modules/getSchema');
module.exports.getOwnedGames = require('./modules/getOwnedGames');
// If you're chaning the name of the exports modules then you will not be able to follow the docs for this module.
// As you can understand, you can find all the modules inside the "module" folder in this directory.
