module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('746075772799942676');
    const member = message.mentions.members.first();

    member.roles.remove(epicRole);
    message.channel.send('Rol Silindi')
}

module.exports.config = {
    name: "rolsil",
    description: "",
    usage: ".rolsil",
    accessableby: "MANAGE_CHANNELS",
    aliases: []
}
