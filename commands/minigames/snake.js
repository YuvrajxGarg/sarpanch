const { Snake } = require('discord-gamecord')


module.exports = {
	name: 'snake',
	description: "play snake game",
	
	userPerms: [],
	botPerms: [],
    aliases: [],
	run: async (client, message, args) => {


        const Game = new Snake({
            message: message,
            isSlashGame: false,
            embed: {
              title: 'Snake Game',
              overTitle: 'Game Over',
              color: '#5865F2'
            },
            emojis: {
              board: '⬛',
              food: '🍎',
              up: '⬆️', 
              down: '⬇️',
              left: '⬅️',
              right: '➡️',
            },
            snake: { head: '🟢', body: '🟩', tail: '🟢', skull: '💀' },
            foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
            stopButton: 'Stop',
            timeoutTime: 60000,
            playerOnlyMessage: 'Only {player} can use these buttons.'
          });
          
          
          Game.startGame();
       

    }


}