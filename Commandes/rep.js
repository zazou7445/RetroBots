const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

      message.delete(message.author);

      const membre = message.mentions.members.first() || message.member;
      var log_channel = client.channels.get("576836248325587015") //Remplacer par l'id du salon où tu veux que le message s'envoit

      var colors = [
        '#03FAD9',
        '#9703FA',
        '#56FA03',
        '#C6026A',
        '#F26B03',
        '#F20303',
        '#0B03F2'
    ];

    let color = (colors[Math.floor(Math.random() * colors.length)])
      let embed = new Discord.RichEmbed()

      .setColor(color)
      .setAuthor("Ticket Réponse", membre.user.authorAvatarURL)
      .addField(":envelope_with_arrow: Message", '** **')
      .addField('** **', args.join(" "))
      .setFooter(`Commande effectuée par ${message.author.tag}`)
      .setTimestamp()
      log_channel.send(embed)
      message.mentions.users.first().send(embed);
}

module.exports.help = {
    name: "rep",
    aliases: []
}