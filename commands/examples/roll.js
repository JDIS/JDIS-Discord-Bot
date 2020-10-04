exports.run = (client, message, args) => {
	var fs = require("fs");
	let input = "help";
	let namef = "";
	let output; // Output string
	var regex = /\dd\d/; // Standard format regex

	if (args.length != 0) {
		input = args[0].toLowerCase(); // Command argument
	}

	// Gestion du input
	if (input === "help") {
		output = `Veuillez fournir le nombre et le type de dés que vous voulez rouler.\nPar exemple: 2d6 ou 3d10`;
	} else if (regex.test(input)) {
		let nb = input.split("d")[0]; // Number of dice
		if (nb <= 100000) {
			let type = input.split("d")[1]; // Dice type (ie: 20 for d20)
			let rolls = ""; // Roll results
			let total = 0; // Total int value of roll results

			for (let i = 0; i < nb; ++i) {
				let roll = Math.floor(Math.random() * type) + 1;

				if (roll === 1 || roll == type) {
					// __ markdown if minrolled or maxrolled
					rolls += "__" + roll + "__";
				} else {
					rolls += roll;
				}

				if (i < nb - 1) {
					rolls += " + ";
				}
				total += roll;
			}
			rolls += " -> " + total;
			output = rolls;
			if (output.length > 2000) {
				namef = "roll" + args[0] + ".txt";
				fs.writeFile(namef, output, function (err) {
					if (err) throw err;
					console.log("Saved!");
				});
				output = {
					files: [
						{
							attachment: namef,
							name: namef,
						},
					],
				};
			}
		} else {
			output = "Nombre de dé brassé trop élevé! max 100000";
		}
	} else {
		output = `Syntax incorrecte. Utilisez *roll help* pour plus d'informations.`;
	}

	message.channel.send(output).catch(console.error);
	setTimeout(function () {
		fs.unlink(namef, function (err) {
			if (err) throw err;
			console.log("File deleted!");
		});
	}, 10000);
};
