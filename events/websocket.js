
const Discord = require('discord.js');
const client = require('..');
require('dotenv').config() // remove this line if you are using replit

client.ws.on('error', (error) => {

    console.error('WebSocket error:', error);
    // Reconnect logic
    client.destroy()
      .then(() => client.login(process.env.token))
      .catch(console.error);
  });