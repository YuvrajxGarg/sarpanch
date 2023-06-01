const gamecord = require('discord-gamecord')
module.exports = {
	name: 'wordle',
	description: "play wordle game",
	
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {

        const Game = new gamecord.Wordle({
            message: message,
            isSlashGame: false,
            embed: {
              title: "Wordle Games!",
            
            },
            customWord:   null,
            timeoutTime: 60000,
            winMessage: "You won! The word was **{word}**.",
            loseMessage: "You lost! The word was **{word}**.",
            playerOnlyMessage: "Only {player} can use these buttons."
        });
        

        Game.startGame();
       

    }


	
	}



/*             const Game = new gamecord.Wordle({
                message: interaction,
                isSlashGame: true,
                embed: {
                  title: "Wordle Games!",
                  color: process.env.COLOR,
                },
                customWord: interaction.options.getString("word") || null,
                timeoutTime: 60000,
                winMessage: "You won! The word was **{word}**.",
                loseMessage: "You lost! The word was **{word}**.",
                playerOnlyMessage: "Only {player} can use these buttons."
            });
            
            Game.startGame();
            Game.on("gameOver", result => {
                interaction.followUp({ content: `${result}` })
            });

        };
*/