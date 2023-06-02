const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const insulter = require('insult');

module.exports = {
	name: 'insult',
	description: "insults the user or anyone who is mentioned",
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {
        const member = message.mentions.members
        if (!member.first()) { 
        const embed = new EmbedBuilder()
		
		.setDescription(`You have to mention a person to insult`)
		.setColor('#03fcdb')
		
	
	         message.reply({ embeds: [embed]})
        }
        else{
            
            const arr = member.first(member.size)
           // 
            for(b in arr)
            {
            const embed = new EmbedBuilder()
            .setDescription(insulter.Insult() )
           // console.log(arr[b])
           
          message.channel.send({ content : "<@"+arr[b].user.id+"> " , embeds : [embed]})
  
            }
        
	}
}
}
