const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
    if (member.presence.status === 'online') member.presence.status = 'Online';
    if (member.presence.status === 'idle') member.presence.status = 'Idle';
    if (member.presence.status === 'offline') member.presence.status = 'offline';

    let x = Date.now() - member.createdAt;
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
    const joined = Math.floor(y / 86400000);

    const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
    let status = member.presence.status;

    const userEmbed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTimestamp()
    .setColor('BLUE')
    .setImage(member.user.displayAvatarURL())
    .addField("Üye İD", member.id)
    .addField('Roller', `<@&${member._roles.join('> <@&')}>`)
    .addField("Şu Tarihte Oluşturuldu:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField('Suncuya Şu Tarihte Katıldı', `${joineddate} \n> ${joined} Şu Kadar Gün Önce`)
    .addField("Statü", status)

    message.channel.send(userEmbed);
}

module.exports.config = {
    name: "üye",
    description: "Shows the information of a member/user",
    usage: ".üye",
    accessableby: "Members",
    aliases: ['userinfo']
}
