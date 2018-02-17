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
  var regex = /\b90{3}\b/;
  var regex2 = /\b(OVER NINE THOUS)(A+)(ND)(?:!+)?/;

  if (message.match(regex) || message.match(regex2)) {
    bot.sendMessage({
      to:channelID,
      message: "WHAT?! NINE THOUSAND?!"
  });

  }
});
