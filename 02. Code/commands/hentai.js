module.exports = {
	name: 'hentai',
	description: 'This is the hentai command',
	execute(message, args, Discord){
        const errorEmbed = new Discord.MessageEmbed();
		//message.member.roles.cache.has('759519448289378334') &&

		//ISTRUZIONI:
		//Nell'if fai il codicino per dare l'immagine
		//nell'else fai un messaggio embed con scritti diversi errori
		//se ha sbagliato categoria, se ha lanciato l'help o altre cose.
		const chan = message.channel;
		const command = args[0];
		const AHEGAO = 26;
        const ASS = 25;
		const BB = 27;
		const CL = 21;
		const DS = 32;
		const FJ = 21;
		const LOLI = 66;
		const MILF = 28;
		const MONSTER = 33;
		const NEKO = 43;
		const SS = 29;
        const STOCKINGS = 17;
		const TEACHER = 17;
		const YAOI = 45;


		if(message.channel.name == 'text-test-area'){
			if(message.author.tag=="Jarvis#9981"){return;}
			if(command=="ahegao"){
				sendImage("Ahegao", chan, AHEGAO);
            }else if(command=="ass"){
                sendImage("Ass", chan, ASS);
            }else if(command=="bigbreasts"||command=="bb"){
				sendImage("BigBreasts", chan, BB)
			}else if(command=="cheerleader"||command=="cl"){
				sendImage("CheerLeader", chan, CL);
			}else if(command=="darkskin"||command=="ds"){
				sendImage("DarkSkin", chan, DS);
			}else if(command=="footjob"||command=="fj"){
				sendImage("FootJob", chan, FJ);
			}else if(command=="loli"){
				sendImage("Loli", chan, LOLI, ".jpg");
			}else if(command=="milf"){
				sendImage("Milf", chan, MILF, ".jpeg");
			}else if(command=="monster"){
				sendImage("Monster", chan, MONSTER);
			}else if(command=="neko"){
				sendImage("Neko", chan, NEKO);
			}else if(command=="swimsuit"||command=="ss"){
				sendImage("SwimSuit", chan, SS);
            }else if(command=="stockings"){
                sendImage("Stockings", chan, STOCKINGS);
			}else if(command=="teacher"){
				sendImage("Teacher", chan, TEACHER);
			}else if(command=="yaoi"){
				sendImage("Yaoi", chan, YAOI, ".jpg");
			}else if(command=="jarvis"){
				message.channel.send('MMMMMMMMH SUCCHIAMELO TUTTO DAI');
			}else{
				message.channel.send("'" + message.content + "' is not a valid command");
			}
		}
		function sendImage(path, chan, rand, format){
    	    if(format === null||format === undefined){format=".jpeg";}
    	    var i = Math.floor(Math.random() * rand) + 1;
    	    chan.send(path, {files: ["./assets/categories/"+path+"/" + i + format]});
		}
    }
}