/***
 * Author: Michael Labrecque [micklabrecque@hotmail.com]
 * Contributor:
 * Description: Function that flip a coin
 */
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('flip')
		.setDescription("Flip a coin"),
	async execute(interaction) {
		//Envoie l'image gif qui flip un coin et la supprime apres 2.1 sec
		var roll = new Discord.MessageEmbed()
			.setTitle("Coin Flip")
			.setColor("0xFF0000")
			.setDescription(interaction.user.toString())
			.setImage(interaction.client.config.images_Git.flip_coinGif);

		var result = new Discord.MessageEmbed()
			.setTitle("Coin Flip")
			.setColor("0xFF0000")
			.setDescription(interaction.user.toString())

		//génère un nombre random entre 0 et 1 et vérifie quel est le résultat
		if (Math.floor(Math.random() * 2)) {
			result.setImage(interaction.client.config.images_Git.coin_pile);
		} else {
			result.setImage(interaction.client.config.images_Git.coin_face);
		}

		interaction.reply({ embeds: [roll], fetchreply: true })
			.then(() =>
				setTimeout(() => {
					interaction.editReply({ embeds: [result] });
				}, 1500)
			);
	}
};