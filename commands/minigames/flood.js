const gamecord = require('discord-gamecord')
module.exports = {
	name: 'flood',
	description: "play flood game",
	
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {

        const Game = new gamecord.Flood({
            message: message,
            isSlashGame: false,
            embed: {
              title: "Flood Games!",
              
            },
            difficulty: 13,
            timeoutTime: 60000,
            buttonStyle: "SUCCESS",
            emojis: ["🟥", "🟦", "🟧", "🟪", "🟩"],
            winMessage: "You won! You took **{turns}** turns.",
            loseMessage: "You lost! You took **{turns}** turns.",
            playerOnlyMessage: "Only {player} can use these buttons."
        });

        Game.startGame();
        Game.on("gameOver", result => {
            if(result.result == "lose")
            {
                message.channel.send("<@"+result.player.id+"> **YOU LOST!!!** in "+result.turns+" Turns <a:thory_blast:898815936415539210>");
            }
            else{
                message.channel.send("<@"+result.player.id+"> **YOU WON!!!** in "+result.turns+" Turns <a:GigaChad:899919984120193044> ");
            }
        });

    }


	
	}



/* const Game = new gamecord.Flood({
                message: interaction,
                isSlashGame: true,
                embed: {
                  title: "Flood Games!",
                  color: process.env.COLOR,
                },
                difficulty: 13,
                timeoutTime: 60000,
                buttonStyle: "SUCCESS",
                emojis: ["🟥", "🟦", "🟧", "🟪", "🟩"],
                winMessage: "You won! You took **{turns}** turns.",
                loseMessage: "You lost! You took **{turns}** turns.",
                playerOnlyMessage: "Only {player} can use these buttons."
            });
            
            Game.startGame();
            Game.on("gameOver", result => {
                interaction.followUp({ content: `${result}` })
            });

        };*/