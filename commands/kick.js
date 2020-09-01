module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS'))
        message.channel.send("Bu komutu kullanmaya yetkin yok");
    else {
        let member = message.guild.members.cache.get(args);
        if(member) {
        try {
            await member.kick();
            console.log('Atıldı');
            message.channel.send(`${member}, sunucudan atıldı.`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "kick",
    description: "Kicks a user",
    usage: ".kick",
    accessableby: "KICK_MEMBERS",
    aliases: []
}