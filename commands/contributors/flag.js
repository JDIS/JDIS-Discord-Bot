const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
fs = require("fs");

var randomKey = function (obj) {
  var keys = Object.keys(obj);
  return keys[(keys.length * Math.random()) << 0];
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('flag')
    .setDescription("Show a random country flag"),
  async execute(interaction) {
    fs.readFile("commands/contributors/flags.json", "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      let flagList = JSON.parse(data);
      let flag = randomKey(flagList);

      let imageUrl = `https://www.flagpedia.net/data/flags/w1160/${flag.toLowerCase()}.png`;
      const embed = new Discord.MessageEmbed()
        .setTitle("Keep flaging young padawan!")
        .setImage(imageUrl)
        .setFooter(`Nice flag ${flagList[flag]}!`);
      interaction.reply({ embeds: [embed] })
    });
  }
};