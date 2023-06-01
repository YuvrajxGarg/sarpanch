const { MatchPairs } = require('discord-gamecord')


module.exports = {
	name: 'matchpairs',
	description: "play matchpairs game",
	
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {


        const Game = new MatchPairs({
            message: message,
            isSlashGame: false,
            embed: {
              title: 'Match Pairs',
              color: '#5865F2',
              description: '**Click on the buttons to match emojis with their pairs.**'
            },
            timeoutTime: 60000,
            emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'],
            winMessage: '**You won the Game! You turned a total of `{tilesTurned}` tiles.**',
            loseMessage: '**You lost the Game! You turned a total of `{tilesTurned}` tiles.**',
            playerOnlyMessage: 'Only {player} can use these buttons.'
          });
          
          
        Game.startGame();
       

    }


	
	}
