const SteamApi = require('./index.js');
// Get GetGAchievements

SteamApi.getGAchievements('730', (err, data) => {
    if(err) throw err;
    for(var i = 0; i < data.length; i++){
        console.log(data);
    }
});


// SteamApi.getPlayerInfo('76561198089544929', 'A860DD871BBD3D2410B89282E1B3A6E5', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });


// SteamApi.getFriendList('76561198089544929', 'A860DD871BBD3D2410B89282E1B3A6E5', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// SteamApi.getUserStats(730, '76561198089544929', 'A860DD871BBD3D2410B89282E1B3A6E5', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });