console.log('Hello! 🥰');

require('dotenv').config();

const fetch= require('node-fetch');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('💀');
}

const replies=[
    'if you got issues, i got tissues 🗳',
    'eating candy, feeling dandy 🍭',
    'well hello there 😏',
    'if in doubt, nap it out 😴'
]

client.on('message', gotMessage);

async function gotMessage(msg)
{
    
    if(msg.channel.id=='879264674334527488')
    {
        let tokens= msg.content.split(' ');

       if(tokens[0]=='!helu')
       {
        //msg.reply('🌻');
        const r= Math.floor(Math.random()* replies.length);
        msg.channel.send(replies[r]);
       }
       else if(tokens[0]=='!gif')
       {

        let keywords= 'ketnipz';
        if(tokens.length>1)
        {
            keywords= tokens.slice(1,tokens.length).join(' ');
        }
        let url= `https://g.tenor.com/v1/search?q=${keywords}ketnipz&key=${process.env.TENORKEY}&contentfilter=high`;
        let response= await fetch(url);
        let json= await response.json();
        const r= Math.floor(Math.random()* json.results.length);
        msg.channel.send(json.results[r].url);
        msg.channel.send('GIF from tenor: '+ keywords);
       }
    }
}