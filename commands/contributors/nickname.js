const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const member = message.channel.members.find(
        (user) => user.id === message.author.id
    );
    const chan = client.channels.cache
    .find((channel) => channel.name === "server-logs");
	if (args.length > 0) {
        const last= (member.nickname==null?message.author.username:member.nickname);
        const pgm=member.setNickname(args[0]).catch(console.error);
        pgm.then(gm=>chan.send(last+" a changé son nom pour "+gm.nickname));
    }else{
        chan.send(message.author.username + " n'a pu changer son nickname. Args non spécifié");
    }
};
