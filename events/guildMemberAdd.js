module.exports = (client, member) => {
    console.log(`[event:guildMemberAdd.js] ${member.user.username}#${member.user.discriminator} joined ${member.guild.name}`);
    
    member.user.send(`[event:guildMemberAdd.js] ${member.user.username}#${member.user.discriminator} joined ${member.guild.name}`)
    .catch(console.error);
}