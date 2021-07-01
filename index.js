const express = require("express");
const app = express();
 
app.listen(() => console.log("💕💕💕💕"));
 
app.use('/ping', (req, res) => {
  res.send(new Date());
});

const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

const player = new Player(client);
client.player = player;
client.config = require('./config/bot.json');
client.emotes = require('./config/emojis.json');
client.filters = require('./config/filters.json');
client.commands = new discord.Collection();

setInterval(() => {
  const channel = client.channels.cache.get(client.config.channel);
  if (!channel) return console.error("I can't find this channel!");
  channel
    .join()
    .then(con => {
      console.log("Working!");
    })
    .catch(e => {
      console.error(e);
    });
}, 3000);

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading event ${eventName} 🌚`);
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir('./player-events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./player-events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading player event ${eventName} 🌚`);
        client.player.on(eventName, event.bind(null, client));
    });
});

fs.readdir('./commands/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading command ${commandName} 🌚`);
        client.commands.set(commandName, props);
    });
});

client.login(client.config.token_bot);
