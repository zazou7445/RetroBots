const Discord = require('discord.js');
var prefix = "R!";

module.exports.run = async(client, message, args) => {

    const sondageSlice = message.content.slice(prefix.length + "sondage".length).trim();

    if(message.guild.channels.find('name', 'sondage')){
        message.delete()
    }

    message.delete().catch();
    var embed = new Discord.RichEmbed()
    .setTitle("**__Sondage du jour !__**")
    .setColor("RANDOM")
    .setDescription(sondageSlice)
    .setFooter(`<retro-Bots> | Sondage par ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
    .then(function (message){
        message.react("❌")
        message.react("✅")
    }).catch(function(){
        
    });
}

module.exports.help = {
    name:"sondage"
}