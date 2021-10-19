/***
 * Author: Michael Labrecque [micklabrecque@hotmail.com]
 * Contributor:
 * Description: Function that flip a coin
 */

exports.run = async(client, message, args) => {
	const Discord = require("discord.js");

	//Envoie l'image gif qui flip un coin et la supprime apres 2.1 sec
	var str = new Discord.MessageEmbed()
		.setTitle("Coin Flip")
		.setColor("0xFF0000")
		.setDescription(message.author)
		.attachFiles(client.config.images_Git.flip_coinGif)
		.setImage("attachment://coin_flip.gif");

	message.channel.send(str).then((d_msg) => d_msg.delete({ timeout: 2100 }));

	setTimeout(function () {
		if (Math.floor(Math.random() * 2) == 0) {
			//génère un nombre random entre 0 et 1 et vérifie quel est le résultat
			str = new Discord.MessageEmbed()
				.setTitle("Coin Flip")
				.setColor("0xFF0000")
				.setDescription(message.author)
				.attachFiles(client.config.images_Git.coin_pile)
				.setImage("attachment://pile.png");
		} else {
            str = new Discord.MessageEmbed()
				.setTitle("Coin Flip")
				.setColor("0xFF0000")
				.setDescription(message.author)
				.attachFiles(client.config.images_Git.coin_face)
				.setImage("attachment://face.png");
		}
		message.channel.send(str);
	}, 2500);
};
