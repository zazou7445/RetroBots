module.exports.run = async (client, message, args1) => {
    let args = message.content.split(" ").slice(1);
let youtube = args.slice(0).join('+');
if(!youtube) return message.reply("Merci d'indiquer un texte")
let link = `https://www.youtube.com/results?search_query=` + youtube;
message.channel.send(link);

};

module.exports.help = {
    name: 'youtube'
};