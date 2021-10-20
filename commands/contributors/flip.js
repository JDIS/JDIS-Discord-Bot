/***
 * Author: Michael Labrecque [micklabrecque@hotmail.com]
 * Contributor:
 * Description: Function that flip a coin
 */

exports.run = async (client, message, args) => {
  const Discord = require("discord.js");

  //Envoie l'image gif qui flip un coin et la supprime apres 2.1 sec
  var str = new Discord.MessageEmbed()
    .setTitle("Coin Flip")
    .setColor("0xFF0000")
    .setDescription(message.author.toString())
    .setImage(client.config.images_Git.flip_coinGif);

  message.channel
    .send({ embeds: [str] })
    .then((d_msg) =>
      setTimeout(() => {
        d_msg.delete();
      }, 2100)
    );

  setTimeout(function () {
    if (Math.floor(Math.random() * 2) == 0) {
      //génère un nombre random entre 0 et 1 et vérifie quel est le résultat
      str = new Discord.MessageEmbed()
        .setTitle("Coin Flip")
        .setColor("0xFF0000")
        .setDescription(message.author.toString())
        .setImage(client.config.images_Git.coin_pile);
      choix = 0;
    } else {
      str = new Discord.MessageEmbed()
        .setTitle("Coin Flip")
        .setColor("0xFF0000")
        .setDescription(message.author.toString())
        .setImage(client.config.images_Git.coin_face);
      choix = 1;
    }
    message.channel.send({ embeds: [str] });
  }, 2500);
};
