module.exports = {
	name: 'setmoney',
	description: "Check bot's ping.",
	userPerms: ['Administrator'],
	botPerms: ['Administrator'],
	run: async (client, message, args) => {
        if (message.author.bot) return;
        if (message.guild) {
          client.points.ensure(`${message.guild.id}-${message.author.id}`, {
            user: message.author.id,
            guild: message.guild.id,
            points: args[0],
           // level: 1
          });
          // Code continued...
        }
	}
};