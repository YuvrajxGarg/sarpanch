const gamecord = require('discord-gamecord')
module.exports = {
	name: 'guessthepokemon',
	description: "play guess the pokemon game",
	
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {

        const Game = new gamecord.GuessThePokemon({
            message: message,
            isSlashGame: false,
            embed: {
              title: "Who\'s The Pokemon",
             
            },
            timeoutTime: 30000,
            winMessage: "You guessed it right! It was a {pokemon}.",
            loseMessage: "Better luck next time! It was a {pokemon}.",
            errMessage: "Unable to fetch pokemon data! Please try again.",
            playerOnlyMessage: "Only {player} can use these buttons."
        });
        
        Game.startGame();
        
    }


	
	}



/* const Game = new gamecord.GuessThePokemon({
                message: interaction,
                isSlashGame: true,
                embed: {
                  title: "Who\'s The Pokemon",
                  color: process.env.COLOR
                },
                timeoutTime: 60000,
                winMessage: "You guessed it right! It was a {pokemon}.",
                loseMessage: "Better luck next time! It was a {pokemon}.",
                errMessage: "Unable to fetch pokemon data! Please try again.",
                playerOnlyMessage: "Only {player} can use these buttons."
            });
            
            Game.startGame();
            Game.on("gameOver", result => {
                interaction.followUp({ content: `${result}` })
            });

        };*/