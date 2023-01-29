/**
 * @description This is the main of the Discord Bot
 * @author PascuZ
 * @author GhastyBoy :) 
 * @author MIK L'UNICO
 * @version 19.02.2022
 * @message A NEW BEGINNING MAVVAFFANCULO
 */

//require the framework 'discord.js', makes everything work
const Discord = require('discord.js');
//require the token from the config.json file
const config = require('./config.json');
//create a new client, Jarvis
const client = new Discord.Client();

const ytdl = require('ytdl-core');


//Faccio il login con il TOKEN
client.login(config.BOT_TOKEN);

//the prefix for use the bot commands
const prefix = '.'; 
const fs = require('fs');

//I create a new collection of commands
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//I set the bot ready
client.once('ready', () => {
    console.log('Jarvis é pronto');
    //console.log("I am ready to Play with DMP 🎶");
});

client.once('reconnecting', () => {
    console.log('Jarvis si sta riconnettendo');
});
   client.once('disconnect', () => {
    console.log('Jarvis si é disconnesso');
});

//this part is if someone ask for a command and the bot responds
client.on('message', async (message) => {
    //checking if someone is asking for a command
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //I remove the prefix so I can manage easily the if..else statements
    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    // Boolean variable for command preview
    let commbool = false;
    
    // List of command available
    //let commands = ["help", "admin", "hentai"];
    let commands = [{
        alias:"help",
        file:"help"
    },
    {
        alias:"adm",
        file:"admin"
    },
    {
        alias:"h",
        file:"hentai"
    }]
    // Checking the commands to see if the command inserted from the user is valid
    if(checkCommand(command).valid){
        Console.log("ARG"+args);
        client.commands.get(commands[checkCommand(command).command.alias]).execute(message, args, Discord);
    }else{
        message.channel.send("MMH!! Questo comando non é stato trovato");
    }

    function checkCommand(userCommand){
        for(let i = 0; i < commands.length; i++){
            if(command == commands[i].alias){
                return {
                    valid : true,
                    command : i
                };
            }
        }
        return false;
        
    }
    // Finally I check if the commando is valid
    /*if(commbool){
        client.commands.get(command).execute(message, args, Discord);
    }else{
        message.channel.send("MMH!! Questo comando non é stato trovato");
    }*/

    /*if(command.equals('help') || command.equals('adm') || command.equals('h') )
        client.commands.get('help').execute(message, args, Discord);
    switch(command){
        //The bot execute the program from the src. file
        case 'help':
            client.commands.get(command).execute(message, args, Discord);
            break;
        case 'adm':
            client.commands.get('admin').execute(message, args, Discord);
        case 'h':
            client.commands.get('hentai').execute(message, args, Discord);
            break;
        
    }*/
});






// =================================================================================================
/*
        // PLAYER MUSICA DISCORD - PER MAI
        case 'play':
            const serverQueue = queue.get(message.guild.id);
            client.commands.get('play').execute(message, args, Discord, message, serverQueue);
            break;
        case 'leave':
            client.commands.get('leave').execute(message, args, Discord);
    
        break;

        ================================================

        const ensommaEmb = new Discord.MessageEmbed();
        ensommaEmb
        .setColor()
        .setTitle('ENSOMMA')
        .setDescription('Manuel ha il suo drip')
        .addFields(
            {name: 'XAVI', value: 'te lo lecco tutto'},
            {name: 'MASCIO', value: 'stompa la scuola che sei stupido'},
            {name: 'JUJ', value: 'FASCINATING'}
        )
        .setFooter('Fottetevi');

        message.channel.send(ensommaEmb);
*/