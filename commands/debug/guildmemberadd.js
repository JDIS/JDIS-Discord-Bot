/*
 *  Commande pour générer un faux event 'guildMemberAdd' avec l'auteur du message
 */
exports.run = (client, message, args) => {
    const member = message.channel.members.find(user => user.id === message.author.id);
    client.emit('guildMemberAdd', member);
    console.log(`[command:fakememberadd.js] Faked event "guildMemberAdd" with member "${member.user.username}#${member.user.discriminator}"`)
}