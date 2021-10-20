/***
 * Author: Michael Labrecque [micklabrecque@hotmail.com]
 * Contributor:
 * Description: Function that flip a coin
 */

exports.run = async (client, message, args) => {
	const Discord = require("discord.js");

	//Envoie l'image gif qui flip un coin et la supprime apres 2.1 sec
	var roll = new Discord.MessageEmbed()
		.setTitle("Coin Flip")
		.setColor("0xFF0000")
		.setDescription(message.author.toString())
		.setImage(client.config.images_Git.flip_coinGif);

	var result = new Discord.MessageEmbed()
		.setTitle("Coin Flip")
		.setColor("0xFF0000")
		.setDescription(message.author.toString())

	//génère un nombre random entre 0 et 1 et vérifie quel est le résultat
	if (Math.floor(Math.random() * 2)) {
		result.setImage(client.config.images_Git.coin_pile);
	} else {
		result.setImage(client.config.images_Git.coin_face);
	}

	message.channel
		.send({ embeds: [roll] })
		.then((d_msg) =>
			setTimeout(() => {
				d_msg.delete().then(() => {
					message.channel.send({ embeds: [result] });
				});
			}, 1500)
		);
};
