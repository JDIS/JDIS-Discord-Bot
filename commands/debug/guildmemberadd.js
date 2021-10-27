/*
 *  Commande pour générer un faux event 'guildMemberAdd' avec l'auteur du message
 */

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gmemberadd')
        .setDescription("debug command that emulate member that join the server"),
    async execute(interaction) {
        const member = interaction.channel.members.find(user => user.id === interaction.user.id);
        interaction.client.emit('guildMemberAdd', member);
        console.log(`[command:fakememberadd.js] Faked event "guildMemberAdd" with member "${member.user.username}#${member.user.discriminator}"`)
        interaction.reply({content:`[command:fakememberadd.js] Faked event "guildMemberAdd" with member "${member.user.username}#${member.user.discriminator}"`})
    }
};