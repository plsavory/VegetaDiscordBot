var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true
});

logger.level = "debug";

// Initialize the bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', function (evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user,userID, channelID, message, evt) {
  var input = message.toUpperCase();
  var regex = /([0-9]+)/;

    var received = message.split(" ");
    var match = false;

    for (var i = 0; i < received.length; i++) {
      if (received[i].match(regex)) {
        if (parseInt(received[i]) > 9000) {
          match = true;
        }
      }
    }

    if (match) {
      bot.sendMessage({
        to:channelID,
        message: "ITS OVER NINE THOUSAAAAAAND!!!"
    });
  }

});
