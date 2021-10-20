/***
 * Author: Michael Labrecque [micklabrecque@hotmail.com]
 * Contributor: 
 * Description: Event that execute when a user left the server. It write the message in the server log.
 */

module.exports = (client, member) => {
	const Discord = require("discord.js");

	console.log(
		`[event:guildMemberRemove.js] ${member.user.username}#${member.user.discriminator} left ${member.guild.name}`
	);

	// On ne peux dm un user apres qu'il aie quitter un serveur
	// Aucun message ne lui est donc envoyé et seul un log server est ajouter
	const chan = "server-logs";
	client.channels.cache
		.find((channel) => channel.name === chan)
		.send(
			new Discord.MessageEmbed()
				.setTitle("Member left the server")
				.setColor(0xffff00)
				.setDescription(
					"Le membre " + member.user.username + " a quitter le serveur"
				)
				.setAuthor(
					member.user.username + "#" + member.user.discriminator,
					member.user.displayAvatarURL()
				)
				.setFooter(member.user)
				.setTimestamp(Date.now())
		)
		.catch((err2) =>
			console.log(`[event:guildMemberRemove.js] Channel ${chan} non trouvé`)
		);
};
