/***
 * Author: Michael Labrecque [micklabrecque@hotmail.com]
 * Contributor: Timothy Landry
 * Description: Function that roll dices.
 */
const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require("fs");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.addStringOption(option=>option
			.setName("number")
			.setDescription("Nombre de dés à lancer")
			.setRequired(true))
		.addStringOption(option=>option
			.setName("type")
			.setDescription("Type de dé à lancer ex. 6 pour 6 faces")
			.setRequired(true))
		.setDescription("Permet de rouller un nombre de dés du type spécifé (ex. 1d6, 3d10). 1d6 par défaut"),
	async execute(interaction) {
		let namef = "";
		let output; // Output string
		let diceNum = parseInt(interaction.options.get("number",true).value)
		let diceType = parseInt(interaction.options.get("type",true).value)

		if (diceNum <= 100000) {
			let rolls = ""; // Roll results
			let total = 0; // Total int value of roll results

			for (let i = 0; i < diceNum; ++i) {
				let roll = Math.floor(Math.random() * diceType) + 1;

				if (roll === 1 || roll == diceType) {
					// __ markdown if minrolled or maxrolled
					rolls += "__" + roll + "__";
				} else {
					rolls += roll;
				}

				if (i < diceNum - 1) {
					rolls += " + ";
				}
				total += roll;
			}
			rolls += " -> " + total;
			output = { content: "Résultat: "+total+"\n"+rolls };
			if (rolls.length > 2000) {
				namef = "roll"+diceNum+"d"+diceType+".txt";
				fs.writeFile(namef, rolls, function (err) {
					if (err) throw err;
					console.log("Saved!");
				});
				output = {
					content:"Résultat: "+total,
					files: [
						{
							attachment: namef,
							name: namef,
						},
					],
				};
			}
		} else {
			output = { content: "Nombre de dé brassé trop élevé! max 100000"};
		}
		interaction.reply(output).catch(console.error);
		if(namef)
			setTimeout(function () {
				fs.unlink(namef, function (err) {
					if (err) throw err;
					console.log("File deleted!");
				});
			}, 10000);
	}
 };