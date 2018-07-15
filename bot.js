var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var awayUser = null;
var nsfw = 445652248408621058;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Configure logger settings
/*logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});*/
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.indexOf(awayUser) > -1) {
      bot.sendMessage({
          to: channelID,
          message: 'That user is away right now!'
        });
}
    else if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                break;
            case 'ding':
                    bot.sendMessage({
                        to: channelID,
                        message: 'Dong!'
                    });
              break;
            case 'away':
            // !away
              if (awayUser == null) {
                bot.sendMessage({
                  to: channelID,
                  message: 'You have been set to away status! Send !return when you get back.'
                });
                awayUser = userID;
              }
              else {
                bot.sendMessage({
                  to: channelID,
                  message: 'Another user is currently away, and I only have room for one inside me. Unlike you.'
                })
              }
              break;
            case 'return':
              awayUser = null;
              bot.sendMessage({
                to: channelID,
                message: 'User ' + userID + ' has returned to the chat. Let the smut begin again!'
              })
            break;
            case 'porn':
            if (channelID == 445652248408621058)
            {
            var holder = getRandomInt(3846);
            bot.sendMessage({
              to: channelID,
              message: 'Someone ordered some nice porn? '
            });
            bot.sendMessage({
              to: channelID,
              message: 'http://cache.booru.org/index.php?page=post&s=view&id=' + holder
            });
            }
            else {
              bot.sendMessage({
                to: channelID,
                message: 'You cannot use that outside of the NSFW channel. Nice try.'
            });
          }
            break;
            case 'dong':
            bot.sendMessage({
              to: channelID,
              message: '8====D ~'
            });
            // Just add any case commands if you want to..
         }

     }
});
