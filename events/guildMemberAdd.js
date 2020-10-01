module.exports = (client,member) => {
  console.log(member.user);
  const message= ":jdis:Hello world "+ member.toString()+"!:jdis:\n"+
  "Bienvenue sur le serveur Discord de JDIS. Ici, tu pourra échanger sur différent sujet en rapport avec la programmation, la sécurité et tout autre"+
  "sujet liée à l'informatique ou l'électronique.\n"+
  "Il te sera annoncé dans le channel " + member.guild.channels.cache.find(channel=>channel.name==="announcements").toString() + " différents événement organisé tout au long de l'année.\n"+
  "Nous te suggérons fortement de prendre connaissance de nos "+ member.guild.channels.cache.find(channel=>channel.name==="rules").toString()+".\n"+
  "Que l'apprentissage soit la force.";

  member.user.send(message)
    .catch(console.error);
};