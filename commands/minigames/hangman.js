const gamecord = require('discord-gamecord')
module.exports = {
	name: 'hangman',
	description: "play hangman game",
	
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {

        const Game = new gamecord.Hangman({
            message: message,
            isSlashGame: false,
            embed: {
              title: "Hangman Games!",
            },
            hangman: { hat: "🎩", head: "😟", shirt: "👕", pants: "🩳", boots: "👞👞" },
            timeoutTime: 60000,
           
            winMessage: "You won! The word was **{word}**.",
            loseMessage: "You lost! The word was **{word}**.",
            playerOnlyMessage: "Only {player} can use these buttons."
        });

        Game.startGame();
       

    }


	
	}






/**const Game = new gamecord.Hangman({
                message: interaction,
                isSlashGame: true,
                embed: {
                  title: "Hangman Games!",
                  color: process.env.COLOR
                },
                hangman: { hat: "🎩", head: "😟", shirt: "👕", pants: "🩳", boots: "👞👞" },
                customWord: interaction.options.getString("word"),
                timeoutTime: 60000,
                theme: interaction.options.getString("theme"),
                winMessage: "You won! The word was **{word}**.",
                loseMessage: "You lost! The word was **{word}**.",
                playerOnlyMessage: "Only {player} can use these buttons."
            });
            
            Game.startGame(); */