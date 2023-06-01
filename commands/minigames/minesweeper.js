const gamecord = require('discord-gamecord')
module.exports = {
	name: 'minesweeper',
	description: "play minesweeper game",
	
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {

        const Game = new gamecord.Minesweeper({
            message: message,
            isSlashGame: false,
            embed: {
              title: "Minesweeper Games!",
              
              description: "Click on the buttons to reveal the blocks except mines."
            },
            emojis: { flag: "🚩", mine: "💣" },
            mines: 5,
            timeoutTime: 60000,
            winMessage: "You won the Game! You successfully avoided all the mines.",
            loseMessage: "You lost the Game! Beaware of the mines next time.",
            playerOnlyMessage: "Only {player} can use these buttons."
        });
        
        Game.startGame();
       

    }


	
	}