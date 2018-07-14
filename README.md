# Steams Web Api in a module
Here is everything you need for interacting with the steams web api.
Before you begin using this we recommend getting the [apikey](https://steamcommunity.com/dev/apikey) right away. If you don't have one you will not be able to use some of the functions.

**Contribute:** [Github Rep](https://github.com/ThunbergOlle/web-api-steam)

**Install**
```js
npm web-api-steam --save
```
**Import**
```js
const SteamApi = require('web-api-steam');
```

## Methods
```js
SteamApi.getFriendList(steam64id, key, (err, data) => {})
```
- steam64id: This is the steam64id of the user that you want to get the inventory from. Use a string value.
- key: This is the apikey
Better docs and readme file will be added soon!
- callback: Callback function.
    - err: If there are any errors here they will be!
    - data: The data received

```js
SteamApi.getPlayerInfo(steam64id, key, (err, data) => {})
```
- steam64id: This is the steam64id of the user that you want to get the inventory from. Use a string value.
- key: This is the apikey
Better docs and readme file will be added soon!
- callback: Callback function.
    - err: If there are any errors here they will be!
    - data: The data received

```js
SteamApi.getGAchievements(appid, (err, data) => {})
```   
- appid: The appid you want to get the global achievements for
- callback: Callback function
    - err: If there are any errors here they will be!
    - data: The data received

```js
SteamApi.getPlayerBans(steam64id, apikey, (err, data) => {})
```   
- steam64id: The steam64id of the user you want to check bans on.
- apikey: The required apikey.
- callback: Callback function
    - err: If there are any errors here they will be!
    - data: The data received
```js
SteamApi.getOwnedGames(steam64id, apikey, (err, data) => {})
```
- steam64id: The steam64id of the user you want to check bans on.
- apikey: The required apikey.
- callback: Callback function
    - err: If there are any errors here they will be!
    - data: The data received
---
### Examples in JS format
Here you will be able to find examples.
#### Get Player Bans
```js
SteamApi.getPlayerBans('76561198089544929', 'your_api_key', (err, data) => {
    if(err) throw err;
    console.log(data);
})

```
**Output**
```js
{ SteamId: '76561198089544929',
  CommunityBanned: false,
  VACBanned: false,
  NumberOfVACBans: 0,
  DaysSinceLastBan: 0,
  NumberOfGameBans: 0,
  EconomyBan: 'none' }
```
---
#### Get Friendlist of player
```js
SteamApi.getFriendList('76561198089544929', 'your_api_key', (err, data) => {
    if(err) throw err;
    console.log(data);
});
```
**Output**
```js
[ { steamid: '76561197963343887',
    relationship: 'friend',
    friend_since: 1517122708 },
  { steamid: '76561197969200720',
    relationship: 'friend',
    friend_since: 1457710832 },
  { steamid: '76561197986015023',
    relationship: 'friend'}
    ]
```
---
#### Get Friendlist of player
```js
SteamApi.getGAchievements('730', (err, data) => {
    if(err) throw err;
    console.log(data);
});
```
**Output**
```js
[ { name: [ 'KILL_ENEMY_RELOADING' ],
    percent: [ '78.5999984741210938' ] },
  { name: [ 'GIVE_DAMAGE_LOW' ],
    percent: [ '78.5999984741210938' ] },
  { name: [ 'UNSTOPPABLE_FORCE' ], percent: [ '77.5' ] },
  { name: [ 'KILL_ENEMY_LOW' ],
    percent: [ '77.4000015258789063' ] },
  { name: [ 'WIN_ROUNDS_LOW' ], percent: [ '77' ] }
  }]
```

You should be able to get the basics now how it response, you can read more about this on the [wiki]() page.
## License
MIT License

Copyright (c) 2018 Olle Thunberg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
