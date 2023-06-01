const gamecord = require('discord-gamecord')
module.exports = {
	name: 'slotmachine',
	description: "play slotmachine",
	
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {

        const Game = new gamecord.Slots({
            message: message,
            isSlashGame: false,
            embed: {
              title: "Slot Machine Games!"
            },
            slots: ["🍇", "🍊", "🍋", "🍌"]
        });
        
        Game.startGame();
        Game.on("gameOver", result => {
            if(result.result == "lose")
            {
                message.channel.send("<@"+result.player.id+"> **LOST** <a:thory_blast:898815936415539210>");
            }
            else{
                message.channel.send("<@"+result.player.id+"> **WON!!!** <a:GigaChad:899919984120193044> ");
            }
        });

    }


	
	}



/* const Game = new gamecord.Slots({
                message: interaction,
                isSlashGame: true,
                embed: {
                  title: "Slot Machine Games!",
                  color: process.env.COLOR
                },
                slots: ["🍇", "🍊", "🍋", "🍌"]
            });
            
            Game.startGame();
            Game.on("gameOver", result => {
                interaction.followUp({ content: `${result}` })
            });

        }; */