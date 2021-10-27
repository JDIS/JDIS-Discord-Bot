/***
 * Author: Michael Labrecque [micklabrecque@hotmail.com]
 * Contributor: 
 * Description: Send a welcome DM to the new user.
 */

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
				"Ici, tu pourra échanger sur différent sujet en rapport avec la programmation, la sécurité et tous autres " +
				"sujets liés à l'informatique ou l'électronique.\n\n"
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
		message = new Discord.MessageEmbed()
			.setTitle("Bonjour " + member.user.username + "\n")
			.setDescription(`Bienvenue sur le serveur discord "${member.guild.name}"!`)
			.setColor("0xffffff");
	}

	//envoie le message en dm si possible
	const dmchan = member.user.createDM(true).catch(console.error);
	dmchan.then((chan) =>
		chan.send({ embeds: message }).catch((err) =>
			client.channels.cache
				.find((channel) => channel.name === "server-logs")
				.send({
					embeds: [new Discord.MessageEmbed()
						.setTitle("Welcome message not delivred")
						.setColor(0xffff00)
						.setDescription(
							"Le membre " +
							member.user.username +
							" n'a pas reçus le message de bienvenu. Il ne peux être contacté en DM"
						)
						.setAuthor(
							client.user.username + "#" + client.user.discriminator,
							client.user.displayAvatarURL()
						)
						.setFooter(member.user.toString())
						.setTimestamp(Date.now())]
				}

				)
				.then(
					console.log(
						`[event:guildMemberAdd.js] ${member.user.username}#${member.user.discriminator} can't be DM`
					)
				)
				.catch((err2) =>
					console.log(
						`[event:guildMemberAdd.js] Channel server-logs non trouvé`
					)
				)
		)
	);

	//log qu'un membre a join le server
	const chan = "server-logs";
	client.channels.cache
		.find((channel) => channel.name === chan)
		.send({
			embeds: [new Discord.MessageEmbed()
				.setTitle("Member join")
				.setColor(0xffff00)
				.setDescription(
					"Le membre " + member.user.username + " a rejoins le serveur"
				)
				.setAuthor(
					member.user.username + "#" + member.user.discriminator,
					member.user.displayAvatarURL()
				)
				.setFooter(member.user.toString())
				.setTimestamp(Date.now())]
		})
		.catch((err2) =>
			console.log(`[event:guildMemberAdd.js] Channel ${chan} non trouvé`)
		);
};
