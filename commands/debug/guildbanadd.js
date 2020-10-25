/*
 *  Commande pour générer un faux event 'guildMemberAdd' avec l'auteur du message
 */
exports.run = (client, message, args) => {
	const member = message.channel.members.find(
		(user) => user.id === message.author.id
	);
	const guild = client.guilds.cache.find(
		(guild) => guild.id === client.config.guildid
    );
    
	client.emit("guildBanAdd", guild, member.user);
	console.log(
		`[command:fakememberbanadd.js] Faked event "guildBanAdd" with member "${member.user.username}#${member.user.discriminator}"`
	);
};
