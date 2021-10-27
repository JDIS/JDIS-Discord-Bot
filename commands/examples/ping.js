/***
 * Author: Timothy Landry
 * Contributor:
 * Description: Simple ping function that answer with a pong message
 */
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Replies with pong"),
    async execute(interaction) {
        interaction.reply({
            content: "pong!",
            ephemeral: true
        })
    }
};