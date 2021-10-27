const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription("Send a random meme from subredits"),
    async execute(interaction) {
        const randomPuppy = require('random-puppy');
        const subReddits = ["memes", "wholesomememes", "dankmemes", "memes_of_the_dank", "programmerhumor", "gamingmemes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        image = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
            .setImage(image)
            .setTitle(`From /r/${random}`)
            .setURL(`http://reddit.com/r/${random}`)

        interaction.reply({ embeds: [embed] });
    }
};
