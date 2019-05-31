const Discord = require('discord.js');
const moment = require('moment')
const fs = require('fs')

module.exports.run = async (client, msg, args) => {

  function checkBots(guild) {
    let botCount = 0;
    guild.members.forEach(member => {
      if(member.user.bot) botCount++;
    });
    return botCount;
  }

  function checkDoNotDisturb(guild) {
    let checkDnd = 0;
    guild.members.forEach(member => {
      if(member.presence.status === "dnd") checkDnd++;
    });
    return checkDnd;
  }

    function checkOnline(guild) {
    let checkOn = 0;
    guild.members.forEach(member => {
      if(member.presence.status === "online") checkOn++;
    });
    return checkOn;
  }

    function checkIdle(guild) {
    let checkI = 0;
    guild.members.forEach(member => {
      if(member.presence.status === "idle") checkI++;
    });
    return checkI;
  }

    function checkOffline(guild) {
    let checkOff = 0;
    guild.members.forEach(member => {
      if(member.presence.status === "offline") checkOff++;
    });
    return checkOff;
  }

    function checkStreaming(guild) {
    let checkStream = 0;
    guild.members.forEach(member => {
      if(member.presence.status === "streaming") checkStream++;
    });
    return checkStream;
  }

  function checkMembers(guild) {
    let memberCount = 0;
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++;
    });
    return memberCount;
  }

    let servericon = msg.guild.iconURL;
    const verificationLevel = msg.guild.verificationLevel
    const verificationLevels = ['Aucune', 'Faible', 'Moyen', '(╯°□°）╯︵ ┻━┻', '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻']



    var embedinfoguild = new Discord.RichEmbed()
    .setTitle(`Infos de ${msg.guild.name} :`)
    .setFooter(`Demandée par ${msg.author.username}`)
    .setTimestamp()
    .setAuthor(client.user.tag, client.user.avatarURL)
    .setThumbnail(servericon)
    .addField("**__Informations Générales :__**", "** **")
    .addField("**❯ Popriétaire :**", msg.guild.owner.user.tag, true)
    .addField('**❯ Nombre de membres :**', msg.guild.memberCount, true)
    .addField("**❯ Salons Vocaux :**", `${msg.guild.channels.filter(channel => channel.type === 'voice').size} salon(s) vocaux`, true)
    .addField("**❯ Salons Textuels :**", `${msg.guild.channels.filter(channel => channel.type === 'text').size} salon(s) textuels`, true)
    .addField('**❯ Humains :**', checkMembers(msg.guild), true)
    .addField('**❯ Bots :**', checkBots(msg.guild), true)
    .addField('**__Statut des membres :__**', '** **')
    .addField('**❯ En Ligne <:online:531469657886949386> :**', checkOnline(msg.guild))
    .addField('**❯ Inactif <:idle:541389698027880468> :**', checkIdle(msg.guild))
    .addField('**❯ Ne pas déranger <:dnd:531469579226972160> :**', checkDoNotDisturb(msg.guild))
    .addField('**❯ <:offline:531470748779413504> Hors-Ligne <:invisible:531469623644651520> :**', checkOffline(msg.guild))
    .addField('**❯ Streaming <:stream:531470719528206357> :**', checkStreaming(msg.guild))
    .addField("\n**__Autres Informations :__**", "** **")
    .addField('**❯ ID :**', `${msg.guild.id}`, true)
    .addField('**❯ Sécurité :**', `${verificationLevels[msg.guild.verificationLevel]}`, true)
    .addField('**❯ Crée le :**', `${moment.utc(msg.guild.createdAt).format("LL")}`, true)
    .addField("**❯ Roles :**", `${msg.guild.roles.filter(r => r.id !== msg.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "`Aucun Rôle.`"}`, true)
    .addField("**❯ Emojis :**", `${msg.guild.emojis.filter(e => e.id !== msg.guild.id).map(emojis => `${emojis}`).join(" **|** ") || "`Aucun Emoji.`"}`, true)
    msg.channel.send(embedinfoguild)

console.log(`\n=-=-=-=-=-\n[LOGS] Commande effectué : guildinfo.\n❯ Utilisateur ayant fait cette commande : ${msg.author.username}\n❯ ID : ${msg.author.id}\n❯ Serveur : ${msg.guild}\n-=-=-=-=-=-`)
}

module.exports.help = {
    name: "serveurinfo",
    aliases: ['serverinfo', 'servinfo', 'si', 'gi']
}