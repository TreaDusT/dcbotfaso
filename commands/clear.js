module.exports.run = async (bot, message) =>  {
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
    
    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Lütfen sayı yazınız.') }

    if (parseInt(args[0]) > 100) {
        return message.reply('1 Seferde En Fazla 100 Mesaj Silebilirsin.')
    } else {
        deleteAmount = parseInt(args[0]);
    }
    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`***${deleteAmount}*** Mesaj Başarı İle Silindi. `)
}

module.exports.config = {
    name: "sil",
    description: "clears message",
    usage: ".sil",
    accessableby: "MANAGE_CHANNELS",
    aliases: ['c', 'purge']
}