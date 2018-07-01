const SteamApi = require('./index.js');
// Get GetGAchievements

// SteamApi.GetGAchievements('730', (err, data) => {
//     if(err) throw err;
//     for(var i = 0; i < data.length; i++){
//         console.log(data);
//     }
// });


// SteamApi.getPlayerInfo('76561198089544929', '', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// SteamApi.getFriendList('76561198089544929', '', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

SteamApi.getUserStats(730, '76561198089544929', '', (err, data) => {
    if(err) throw err;
    console.log(data);
});