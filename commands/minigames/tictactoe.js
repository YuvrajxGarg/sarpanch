const { TicTacToe } = require('discord-gamecord')


module.exports = {
	name: 'tictactoe',
	description: "play tictactoe game",
    aliases: ['ttt'],
	
	userPerms: [],
	botPerms: [],
  
	run: async (client, message, args) => {
        const opp = message.mentions.users.first()
        if (!opp) return message.reply('chal aaj akele khel kr dikha tic tac toe, mai bhi dekhu lonliness ka live example')
        const Game = new TicTacToe({
            message: message,
            isSlashGame: false,
            opponent: opp,
            embed: {
              title: 'Tic Tac Toe',
              color: '#5865F2',
              statusTitle: 'Status',
              overTitle: 'Game Over'
            },
            emojis: {
              xButton: '❌',
              oButton: '🔵',
              blankButton: '➖'
            },
            mentionUser: true,
            timeoutTime: 60000,
            xButtonStyle: 'DANGER',
            oButtonStyle: 'PRIMARY',
            turnMessage: '{emoji} | Its turn of player **{player}**.',
            winMessage: '{emoji} | **{player}** won the TicTacToe Game.',
            tieMessage: 'The Game tied! No one won the Game!',
            timeoutMessage: 'The Game went unfinished! No one won the Game!',
            playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
          });
          
          
          Game.startGame();
       

    }


}