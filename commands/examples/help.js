const { MessageEmbed } = require("discord.js");

exports.run = (client, message, args) => {
	var embed = new MessageEmbed().setTitle("Help!").setColor("0xfff708");
	const pref = client.config.prefix;
	embed.addField(
		(name = "Commande"),
		(value =
			pref + "help\n" +
			pref + "flip\n" +
			pref + "ping\n" +
			pref + "meme\n" +
			pref + "roll\n\n"),
		(inline = true)
	);
	embed.addField(
		(name = "Description"),
		(value =
			"Affiche les commandes d'aides\n" +
			"Flip une pièce de monnaie\n" +
			"Pong!\n" +
			"Affiche un meme au hasard\n" +
			"Permet de roullé un nombre de dés du type spécifé (ex. 1d6, 3d10). 1d6 par défaut\n"),
		(inline = true)
	);
	const help_message =
		"Voici les différentes commandes pouvant être utilisé par le présent bot!\n\n";

	const debug =
		"Voici les commande de débug\n" +
		"!guildmemberadd - Génére manuellement l'événement d'ajout d'un membre sur le serveur\n";

	if (client.config.debug) {
		embed.setDescription(help_message + debug);
	} else {
		embed.setDescription(help_message);
	}

	message.channel.send(embed).catch(console.error);
};
