/*
 *  Commande pour générer un faux event 'guildMemberAdd' avec l'auteur du message
 */
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gbannadd')
		.setDescription("debug command that emulate a ban event"),
	async execute(interaction) {
		const member = interaction.channel.members.find(
			(user) => user.id === interaction.user.id
		);
		const guild = interaction.client.guilds.cache.find(
			(guild) => guild.id === interaction.client.config.guildid
		);
		
		interaction.client.emit("guildBanAdd", guild, member.user);
		console.log(
			`[command:fakememberbanadd.js] Faked event "guildBanAdd" with member "${member.user.username}#${member.user.discriminator}"`
		);
		interaction.reply({content:`[command:fakememberbanadd.js] Faked event "guildBanAdd" with member "${member.user.username}#${member.user.discriminator}"`})
	}
};