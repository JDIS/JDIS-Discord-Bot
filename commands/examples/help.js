/***
 * Author: Timothy Landry
 * Contributor: Michael Labrecque [micklabrecque@hotmail.com]
 * Description: Help function that show possible command and params to use them
 */
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Show help about commands'),
	async execute(interaction) {
		var embed = new MessageEmbed()
			.setTitle("Help!")
			.setColor("0xfff708");
		const pref = "/"
		embed.addField("Commande",
			pref + "help\n" +
			pref + "flip\n" +
			pref + "ping\n" +
			pref + "meme\n" +
			pref + "roll\n\n" +
			pref + "flag\n" +
			pref + "nickname\n\n", true);
		embed.addField("Description",
			"Affiche les commandes d'aides\n" +
			"Flip une pièce de monnaie\n" +
			"Pong!\n" +
			"Affiche un meme au hasard\n" +
			"Permet de roullé un nombre de dés du type spécifé (ex. 1d6, 3d10). 1d6 par défaut\n" +
			"Affiche un drapeau au hasard\n" +
			"Permet de changer son pseudo sur le serveur pour celui spécifié en param.\n",
			true
		);
		const help_message =
			"Voici les différentes commandes pouvant être utilisé par le présent bot!\n\n";

		const debug =
			"Voici les commande de débug\n"

		if (interaction.client.config.debug) {
			embed.setDescription(help_message + debug);
			embed.addFields(
				{ name: '\u200B',value:'\u200B'},
				{ name: "DEBUG",value:'___'},
				{ name: "Commande", value: pref + "guildmemberadd", inline: true },
				{ name: "Description", value: "Génére manuellement l'événement d'ajout d'un membre sur le serveur\n", inline: true },
			)
		} else {
			embed.setDescription(help_message);
		}
		interaction.reply({ embeds: [embed] })
	}
}