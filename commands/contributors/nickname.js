/***
 * Author: Michael Labrecque [micklabrecque@hotmail.com]
 * Contributor:
 * Description: Function that change nickname on the server
 */

const Discord = require("discord.js");

exports.run = async (client, message, args) => {
	const member = message.channel.members.find(
		(user) => user.id === message.author.id
	);
	const chan = client.channels.cache.find(
		(channel) => channel.name === "server-logs"
	);

	//si le pseudo est spécifié le changer et log le changement
	//sinon log l'erreur de changement
	if (args.length > 0) {
		const last =
			member.nickname == null ? message.author.username : member.nickname;
		const pgm = member.setNickname(args[0]).catch(console.error);
		pgm.then((gm) =>
			chan.send(
				new Discord.MessageEmbed()
                    .setTitle("Name change")
                    .setAuthor(message.author.username+"#"+message.author.discriminator)
					.setColor("0xFFFF00")
					.setDescription("**Avant:** "+last + "\n **Après:** " + gm.nickname)
			)
		);
	} else {
		var str = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("0xFF0000")
			.setDescription(
				message.author.toString() +
					", vous devez spécifié le nouveau pseudo que vous voulez utiliser ex: " +
					client.config.prefix +
					"nickname pseudo"
			);

		message.channel.send(str).then((d_msg) => d_msg.delete({ timeout: 10000 }));

		str = new Discord.MessageEmbed()
			.setTitle("User Error")
			.setColor("0xFFFF00")
			.setDescription(
				message.author.username +
					" n'a pu changer son nickname. Args non spécifié"
			);
		chan.send(str);
	}
};
