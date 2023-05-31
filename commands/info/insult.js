const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const insulter = require('insult');

module.exports = {
	name: 'insult',
	description: "insults the user or anyone who is mentio",
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {
        //console.log(args);
        const member = message.mentions.members.first()
        if (!member) { 
            message.channel.send("You have to mention a person to insult")
        }
        else{
    		message.channel.send("<@"+member+"> " + insulter.Insult()) 
        }
        
	}
}
