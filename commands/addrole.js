module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('746075772799942676');
    const member = message.mentions.members.first();

    member.roles.add(epicRole);
    message.channel.send('Rol Eklendi')
}

module.exports.config = {
    name: "rolekle",
    description: "",
    usage: ".rolekle",
    accessableby: "MANAGE_ROLES ",
    aliases: []
}
