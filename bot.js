const Discord = require("discord.js");
const fs = require("fs");

const Enmap = require("enmap");

const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

fs.readdir("./commands/examples/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/examples/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading : !${commandName}`);
        client.commands.set(commandName, props);
    });
});

client.on('error', console.error);
client.login(config.token);