/***
 * Author: Michael Labrecque [micklabrecque@hotmail.com]
 * Contributor: 
 * Description: Event that execute when a user is banned. It write the bannishment message in the server log.
 */

module.exports = async (client, guild, user) => {
	const Discord = require("discord.js");
	
	console.log(
		`[event:guildBanAdd.js] ${user.username}#${user.discriminator} ban from ${guild.name}`
	);

	// On ne peux dm un user apres qu'il aie quitter un serveur
	// Aucun message ne lui est donc envoyé et seul un log server est ajouter
	const chan = "server-logs";
	client.channels.cache
		.find((channel) => channel.name === chan)
		.send(
			new Discord.MessageEmbed()
				.setTitle("Member ban")
				.setColor(0xffff00)
				.setDescription("Le membre " + user.username + " a été banni")
				.setAuthor(
					user.username + "#" + user.discriminator,
					user.displayAvatarURL()
				)
				.setFooter(user)
				.setTimestamp(Date.now())
		)
		.catch((err2) =>
			console.log(`[event:guildBanAdd.js] Channel ${chan} non trouvé`)
		);
};
