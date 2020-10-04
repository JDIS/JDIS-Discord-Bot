const Discord = require("discord.js");
fs = require("fs");

var randomKey = function (obj) {
  var keys = Object.keys(obj);
  return keys[(keys.length * Math.random()) << 0];
};

exports.run = async (client, message, args) => {
  fs = require("fs");
  fs.readFile("commands/contributors/flags.json", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    let flagList = JSON.parse(data);
    let flag = randomKey(flagList);

    let imageUrl = `https://www.countryflags.io/${flag}/flat/64.png`;
    const embed = new Discord.MessageEmbed()
      .setImage(imageUrl)
      .setTitle("Keep flaging young padawan!")
      .setFooter(`Nice flag ${flagList[flag]}!`);
    message.channel.send(embed).catch(console.error);
  });
};
