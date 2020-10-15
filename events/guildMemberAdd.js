module.exports = (client, member) => {
	const Discord = require("discord.js");

	console.log(
		`[event:guildMemberAdd.js] ${member.user.username}#${member.user.discriminator} joined ${member.guild.name}`
	);

	// Vérification si le serveur est celui de JDIS pour
	// envoyer un message générique si c'est pas le cas.
	let message;
	if (member.guild.id === client.config.guildid) {
		message = new Discord.MessageEmbed()
			.setTitle(":jdis:Hello " + member.user.username + "!:jdis:\n")
			.setColor("0xff0000")
			.setDescription(
				"Bienvenue sur le serveur Discord de JDIS.\n\n" +
					"Ici, tu pourra échanger sur différent sujet en rapport avec la programmation, la sécurité et tout autre " +
					"sujet liée à l'informatique ou l'électronique.\n\n"
			)
			.addField(
        "Announcements",
				"Il te sera annoncé dans le channel " +
					member.guild.channels.cache
						.find((channel) => channel.name === "announcements")
						.toString() +
					" différents événement organisé tout au long de l'année.\n",
				false
			)
			.addField(
				"Rules",
				"Nous te suggérons fortement de prendre connaissance de nos " +
					member.guild.channels.cache
						.find((channel) => channel.name === "rules")
						.toString() +
					".\n\n",
				false
			)
			.setFooter("Que l'apprentissage soit la force.")
			.setThumbnail("https://avatars0.githubusercontent.com/u/15794364");
	} else {
		message = `Bienvenue sur le serveur discord "${member.guild.name}"!`;
	}
	member.user.send(message).catch(console.error);
};
