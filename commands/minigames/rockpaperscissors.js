const { RockPaperScissors } = require('discord-gamecord')


module.exports = {
	name: 'rps',
	description: "play  rps",
	
	userPerms: [],
	botPerms: [],
    aliases: ['wyr'],
	run: async (client, message, args) => {
const opp = message.mentions.users.first()
if (!opp) return message.reply('chal aaj akele khel kr dikha rock paper scissors, mai bhi dekhu lonliness ka live example')
    const Game = new RockPaperScissors({
      message: message,
      isSlashGame: false,
      opponent: opp,
      
      embed: {
        title: 'Rock Paper Scissors',
        color: '#5865F2',
        description: 'Press a button below to make a choice.'
      },
      buttons: {
        rock: 'Rock',
        paper: 'Paper',
        scissors: 'Scissors'
      },
      emojis: {
        rock: '🌑',
        paper: '📰',
        scissors: '✂️'
      },
      mentionUser: true,
      timeoutTime: 60000,
      buttonStyle: 'PRIMARY',
      pickMessage: 'You choose {emoji}.',
      winMessage: '**{player}** won the Game! Congratulations!',
      tieMessage: 'The Game tied! No one won the Game!',
      timeoutMessage: 'The Game went unfinished! No one won the Game!',
      playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
    });

        Game.startGame();
       

    }


	
	}
