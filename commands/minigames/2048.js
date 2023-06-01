const gamecord = require('discord-gamecord')
module.exports = {
	name: '2048',
	description: "play 2048 game",
	
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {

        const Game = new gamecord.TwoZeroFourEight({
            message: message,
            isSlashGame: false,
            embed: {
              title: "2048 Games!",
            },
            emojis: {
              up: "⬆️",
              down: "⬇️",
              left: "⬅️",
              right: "➡️",
            },
            timeoutTime: 60000,
            buttonStyle: "SUCCESS",
            playerOnlyMessage: "Only {player} can use these buttons."
        });
          
        Game.startGame();
       

    }


	
	}
