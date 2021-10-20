/***
 * Author: Timothy Landry
 * Contributor: 
 * Description: First file execute when bot is launch. It's the file that log the bot in server
 *      and map command created by contributors.
 */

const Discord = require("discord.js");
const fs = require("fs");
const Enmap = require("enmap");
const config = require("./config.json");

const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.GUILD_BANS,
    Discord.Intents.FLAGS.GUILD_INVITES]
});

client.config = config;
client.commands = new Enmap();

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/examples/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/examples/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading command: ${commandName}`);
        client.commands.set(commandName, props);
    });
});

fs.readdir("./commands/contributors/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/contributors/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading command: ${commandName}`);
        client.commands.set(commandName, props);
    });
});

if(config.debug === true) 
{
    fs.readdir("./commands/debug/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            if (!file.endsWith(".js")) return;
            let props = require(`./commands/debug/${file}`);
            let commandName = file.split(".")[0];
            console.log(`Loading debug command: ${commandName}`);
            client.commands.set(commandName, props);
        });
    });
}

client.on('error', console.error);
client.login(config.token);
