var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var userID;
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
var a = function a(userID){
while (functTag){
  bot.on('message', function (user, userID, channelID, message, evt) {
      // Our bot needs to know if it will execute a command
      // It will listen for messages that contain @UserID
      if (message.indexOf(userID) > -1) {
        bot.sendMessage({
            to: channelID,
            message: 'That user is away right now!'
          });
}
});


}
}
module.exports.a = a;
