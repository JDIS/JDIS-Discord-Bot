/***
 * Author: Timothy Landry
 * Contributor: 
 * Description: First file execute when bot is launch. It's the file that log the bot in server
 *      and map command created by contributors.
 */

const fs = require("fs");
const Discord = require("discord.js");
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
    files
        .filter(file => file.endsWith(".js"))
        .forEach(file => {
            const event = require(`./events/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, event.bind(null, client));
        });
});

client.restCommands = [];

const folders = [
    "./commands/examples/",
    "./commands/contributors/",
    config.debug ? "./commands/debug/" : ""
]

folders.forEach(folder => {
    fs.readdir(folder, (err, files) => {
        if (err) return console.error(err);
        files
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                let command = require(`${folder}/${file}`);
                client.restCommands.push(command.data.toJSON());
                console.log(`Loading command: ${command.data.name}`);
                client.commands.set(command.data.name, command);
            });
    });
});

client.on('error', console.error);
client.login(config.token);
