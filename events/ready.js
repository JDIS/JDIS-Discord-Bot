/***
 * Author: Timothy Landry
 * Contributor: 
 * Description: Function that execute when bot is ready.
 */

module.exports = (client) => {
    client.user.setActivity('>help', { type: 'LISTENING' });

    const guild = client.guilds.cache.get(client.config.guildid);
    let commands;
    if (guild) {
        commands = guild.commands
    }
    else {
        commands = client.application.commands
    }
    // commands.create({
    //     name: "ping",
    //     description: "Replies 'pong'"
    // })
    console.log("[event:ready.js] Bot is online");
};