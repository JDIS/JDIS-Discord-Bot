module.exports = (client, member) => {
	const Discord = require("discord.js");

	console.log(
		`[event:guildMemberRemove.js] ${member.user.username}#${member.user.discriminator} left ${member.guild.name}`
	);

	// Vérification si le serveur est celui de JDIS pour
	// envoyer un message générique si c'est pas le cas.
	let message;
	if (member.guild.id === client.config.guildid) {
		message = new Discord.MessageEmbed()
			.setTitle(":jdis:Goodbye world!:jdis:\n")
			.setColor(0xff0000)
			.setDescription(
				"Bonjour "+ member.toString() + ", nous sommes triste de vous voir quitter le serveur Discord de JDIS.\n" +
					"Nous espérons que vous avez passé de merveilleux moments parmis notre communauté et espérons votre retour!\n"
			).setFooter("Que l'apprentissage soit la force.")
			.setThumbnail("https://avatars0.githubusercontent.com/u/15794364");
	} else {
		message = `${member.toString()}, vous avez quitté le serveur discord!`;
	}
	member.user.send(message).catch(console.error);
};
