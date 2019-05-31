const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async(client, message, args) => {
    let msg = await message.channel.send("Chargement en cours...")

    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("Un problème à survenue ! Veuillez réessayer.")

        let dEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`%?%| Chien`, message.guild.iconURL) // Metez votre nom de nom de serv ou autres 
        .setImage(body.message)
        .setTimestamp(" ")
        .setFooter(`%?%`) // Metez votre nom de nom de serv ou autres 

        message.channel.send({embed: dEmbed})

        msg.delete();
}

module.exports.help = {
    name: 'dog'
};