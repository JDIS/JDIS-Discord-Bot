/*
 *  Commande pour générer un faux event 'guildMemberAdd' avec l'auteur du message
 */

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gmemberremove')
        .setDescription("debug command that emulate member that leave the server"),
    async execute(interaction) {
        const member = interaction.channel.members.find(user => user.id === interaction.user.id);
        interaction.client.emit('guildMemberRemove', member);
        console.log(`[command:fakememberremove.js] Faked event "guildMemberRemove" with member "${member.user.username}#${member.user.discriminator}"`)
        interaction.reply({content:`[command:fakememberremove.js] Faked event "guildMemberRemove" with member "${member.user.username}#${member.user.discriminator}"`})
    }
};