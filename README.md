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
    - data: The data recieved

```js
SteamApi.getPlayerInfo(steam64id, key, (err, data) => {})
```
- steam64id: This is the steam64id of the user that you want to get the inventory from. Use a string value.
- key: This is the apikey
Better docs and readme file will be added soon!
- callback: Callback function.
    - err: If there are any errors here they will be!
    - data: The data recieved

```js
SteamApi.getGAchievements(appid, (err, data) => {})
```   
- appid: The appid you want to get the global achievements for
- callback: Callback function
    - err: If there are any errors here they will be!
    - data: The data recieveded

---
#### Examples in JS format
This section will be added later. 
### More info
I'm really **happy** if you'd like to share this module or use this in your upcomming bot or script or whatever you are going to use this for. If you feel like there is anything missing then please open an issue on the [Github](https://github.com/ThunbergOlle/web-api-steam) page. I will fix it as soon as possible.

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