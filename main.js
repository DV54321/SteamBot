const SteamUser = require('steam-user')
const creds = require('./creds.json')
const Client = new SteamUser()
Client.logOn(creds)
Client.on('loggedOn', () => {
  console.log('logged into steam owo')
  Client.setPersona(SteamUser.Online)
  console.log('Marked as online owo')
  Client.gamesPlayed(creds)
  console.log('Playing ze game')
})
