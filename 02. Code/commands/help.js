module.exports = {
    name: 'help',
    description: 'This is the help command',
    execute(message, args, Discord){
        const messageHelp = new Discord.MessageEmbed();

        messageHelp
        .setColor()
        .setTitle('HELP')
        .setDescription('I comandi di Jarvis sono qui elencati')
        .addFields(
            {name: 'Help', value: '.help'},
            {name: 'Hentai', value: '.h <category>'},
            {name: 'gg', value: '.gg'}
        )
        .setFooter('Fottetevi');

        message.channel.send('fottetevi');
        message.channel.send(messageHelp);
    }
}