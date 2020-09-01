const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} çalışıyorum`)
    bot.user.setActivity(".help - .yetkili", {type: ""});
}