const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = async (client, message, args) => {
    const subReddits = ["memes", "wholesomememes", "dankmemes", "memes_of_the_dank", "programmerhumor", "gamingmemes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]
    const image = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(image)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/r/${random}`)

    message.channel.send(embed);
}