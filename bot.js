require('dotenv').config()

const Discord = require('discord.js')


const { Client, Intents } = require('discord.js');

const client = new Client({ partials: ["CHANNEL"], intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_TYPING] });



client.on('ready', () => {
    console.log("Estou online! Enviem suas confissões em meu pv.");
    client.channels.cache.get("984278432315760660").send("***Estou online! Enviem suas confissões em meu pv***");
})

const cooldown = new Set();



client.on('message', msg => {
    if (msg.guild === null && msg.author.id!=='983486932099137586') {
        if(cooldown.has(msg.author.id)) {
            msg.reply('Por favor espere 10 minutos antes de fazer outra confissão')
        } else {
        var saymsg = msg.content;
        msg.channel.send(saymsg);
        client.channels.cache.get("984278432315760660").send("══━✥◈✥━✥◈✥━══࿇══━✥◈✥━✥◈✥━══\nConfissão anônima:\n\n" + saymsg );
        
        cooldown.add(msg.author.id);
        setTimeout(() => {
            cooldown.delete(msg.author.id)
        }, 60000 * 10 ); 
        }
    }  
})

//Bot

client.login(process.env.BOT_TOKEN)