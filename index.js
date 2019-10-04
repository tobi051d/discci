const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjI5NjA5MjAwNDczMDc5ODIx.XZdw7Q.TSoT6J7fIRK3sT-pEiLWdAtVvYc';

bot.on('ready', () =>{
    console.log('This bot Is Freaking working');
})

bot.on('message', message => {
    if(message.author.bot)
    return;

    if (message.content.toLowerCase() === '!hello')
    message.channel.send("Hey!");

});

bot.on('message', message => {
    if(message.author.bot)
    return;

    if (message.content.toLowerCase() === '!author')
    message.channel.send("ClerckRocky#7735");

});

bot.on('message', message => {
    if(message.author.bot)
    return;

    if (message.content.toLowerCase() === '!entertain')
    message.channel.send("Why Would I?");

});

bot.on('message', message => {
    if(message.author.bot)
    return;

    if (message.content.toLowerCase() === '!creationdate')
    message.channel.send("4/10-2019");

});

bot.on('message', message => {
    if(message.author.bot)
    return;

    if (message.content.toLowerCase() === '!spooky')
    message.channel.send("https://media.giphy.com/media/2vmgb8ZGaeBsuSeo5I/giphy.gif");

});

bot.on('message', message => {
    if(message.author.bot)
    return;

    if (message.content.toLowerCase() === '!commands')
    message.channel.send("!author !commands !creationdate !spooky !entertain !hello !help");

});

bot.on('message', message => {
    if(message.author.bot)
    return;

    if (message.content.toLowerCase() === '!help')
    message.channel.send("To find help please contact @mod or above :)");

});

bot.login(token)