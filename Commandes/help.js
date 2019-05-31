module.exports.run = (client, message, args) => {

  message.delete(message.author);

  const membre = message.mentions.members.first() || message.member;

  message.author.send({embed: {
    color: (0xec0909),
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Voici les commandes, si vous voulez rencontrer mon créateur !",
    description: "Voici toutes mes commandes !",
    fields: [{
        name: "Commandes de modérations",
        value: "R!kick, R!ban, R!addrole, R!delrole, R!clear , R!serveurinfo"
      },
      {
        name: "Commandes",
        value: "R!stats, R!ping , R!serveurCheck , R!botinfos , R!youtube ( votre recherche exemple R!youtube Du76LeBoss )"
      },
      {
        name:"fun Commandes",
        value:"R!dog , R!cat , R!karma"
      }, 
      {
        name:"For invite me on your serveur click on the link below",
        value: "https://discordapp.com/oauth2/authorize?client_id=453966729551282196&scope=bot&permissions=8"
      },
      {
        name:"For give me money(donnation) click on the link below",
        value:"My paypal : https://paypal.me/Du76LeBoss "
      },
      {
        name:"my server",
        value:"My server : https://discord.gg/DmxZKUx "
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "retro-bot by zazou / thank for your adding"
    }
  }
});
}

module.exports.help = {
  name: 'help'
};