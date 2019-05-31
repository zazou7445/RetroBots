const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async(client, message, args) => {
    let msg = await message.channel.send("Chargement en cours...")

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("Un problème à survenue ! Veuillez réessayer.")

        let cEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`%?% | Chat`, message.guild.iconURL) // Metez votre nom de nom de serv ou autres 
        .setImage(body.file)
        .setTimestamp(" ")
        .setFooter(` `) // Metez votre nom de nom de serv ou autres 

        message.channel.send({embed: cEmbed})

        msg.delete();
}

module.exports.help = {
    name: 'cat'
};