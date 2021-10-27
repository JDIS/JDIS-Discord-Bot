/***
 * Author: Timothy Landry
 * Contributor: 
 * Description: Function that execute when bot is ready.
 */
const {
    REST
} = require('@discordjs/rest');

const {
    Routes
} = require('discord-api-types/v9');

module.exports = (client) => {
    CLIENT_ID = client.user.id;
    const rest = new REST({version:"9"}).setToken(client.config.token)
    client.user.setActivity('>help', { type: 'LISTENING' });

    //const guild = client.guilds.cache.get(client.config.guildid);

    (async () => {
        try {
            if (!client.config.guildid) {
                await rest.put(
                    Routes.applicationCommands(CLIENT_ID), {
                        body: client.restCommands
                    },
                );
                console.log('Successfully registered application commands globally');
            } else {
                await rest.put(
                    Routes.applicationGuildCommands(CLIENT_ID,client.config.guildid), {
                        body: client.restCommands
                    },
                );
                console.log('Successfully registered application commands for development guild');
            }
        } catch (error) {
            if (error) console.error(error);
        }
    })();
    // commands.create({
    //     name: "ping",
    //     description: "Replies 'pong'"
    // })
    console.log("[event:ready.js] Bot is online");
};