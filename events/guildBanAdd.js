module.exports = (client, member) => {
	const Discord = require("discord.js");
	console.log(
		`[event:guildMemberRemove.js] ${member.user.username}#${member.user.discriminator} ban from ${member.guild.name}`
	);

	// Vérification si le serveur est celui de JDIS pour
	// envoyer un message générique si c'est pas le cas.
	let message;
	if (member.guild.id === client.config.guildid) {
		message = new Discord.MessageEmbed()
			.setTitle(":jdis:Hello ban world!:jdis:\n")
			.setColor("0xFF0000")
			.setDescription(
				"Bonjour " +
					member.toString() +
					", nous avons le regret de vous annoncé que dû au non respect" +
					" de nos réglements du serveur vous avez été banni de celui-ci!"
			)
			.setThumbnail("https://avatars0.githubusercontent.com/u/15794364");
	} else {
		message = `${member.toString()}, vous avez été banni du serveur ${
			member.guild.name
		}`;
	}
	member.user.send(message).catch(console.error);
};
