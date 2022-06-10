require('dotenv').config()

const Discord = require('discord.js')


const { Client, Intents } = require('discord.js');

const client = new Client({ partials: ["CHANNEL"], intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_TYPING] });


client.on('ready', () => {
    console.log("Estou online! Enviem suas confissões em meu pv.");
    client.channels.cache.get("984278432315760660").send("***Estou online! Enviem suas confissões em meu pv***");
})

client.on('message', msg => {
    if (msg.guild === null && msg.author.id!=='983486932099137586') {

        var saymsg = msg.content;
        msg.channel.send(saymsg);
        client.channels.cache.get("984278432315760660").send("══━✥◈✥━✥◈✥━══࿇══━✥◈✥━✥◈✥━══\nConfissão anônima:\n\n" + saymsg );
    }
})

//client.channels.cache.get(`970188801232207928`).send(saymsg)
//message.channel.send(saymsg);


client.login(process.env.BOT_TOKEN)