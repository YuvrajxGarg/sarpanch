const { ChaosWords } = require('@nottca/weky')


module.exports = {
	name: 'chaoswords',
	description: "play chaos words",
	
	userPerms: [],
	botPerms: [],
    aliases: [],
	run: async (client, message, args) => {

        var randomWords = require('random-words');
        const words = randomWords(args[0] && !isNaN(args[0]) && Number(args[0]) > 0 ? Number(args[0]) : 3) 
        await ChaosWords({
            message: message,
            embed: {
                title: 'ChaosWords',
                description: 'You have **{{time}}** to find the hidden words in the below sentence.',
                color: '#5865F2',
                field1: 'Sentence:',
                field2: 'Words Found/Remaining Words:',
                field3: 'Words found:',
                field4: 'Words:',
                footer: '©️ Team Troubleshooters',
                timestamp: true
            },
            winMessage: 'GG, You won! You made it in **{{time}}**.',
            loseMessage: 'Better luck next time!',
            wrongWordMessage: 'Wrong Guess! You have **{{remaining_tries}}** tries left.',
            correctWordMessage: 'GG, **{{word}}** was correct! You have to find **{{remaining}}** more word(s).',
            time: 60000,
            words: words,
            charGenerated: 17,
            maxTries: 10,
            buttonText: 'Cancel',
            othersMessage: 'Only <@{{author}}> can use the buttons!'
        });

    }


}