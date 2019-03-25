const Discord = require('discord.js');
module.exports.run = async (bot, message) => {
    
if(message.guild.id === "437207256241668096"){
const swears = ["shit", "fuck", "nigga","blowjob","arse","ass","cba","wtf","hell","nigger","dirty nigger","oh my fucking","god","dickhead","bitch","bich","cunt","nibba","kys","stfu","Rape","hoe","h03","shithead","Shitbag","cum","blowjob","kill yourself","n i g g a","B i t c h","F u c k","smexy","sexy","my nigga","twat","whore","c0le"];
for (const word of message.content.split(/\s+/g)) {
  if (!swears.includes(word.toLowerCase())) continue;
message.delete().catch()
  message.reply(`Sorry, that word is blacklisted in The TARDIS system. no im not broken`)
}
}
    if (message.channel.name === "server-suggestions" || message.channel.name === "📝server-suggestions📝" || message.channel.name === "suggestions" || message.channel.name === "suggestion" || message.channel.name === "server-suggestion" || message.channel.name === "📝suggestions" || message.channel.id === "516359903976095755" || message.channel.id === "524090791262683146") {
        if (message.author.id === "515327844449255434" || message.author.id === "288491554841034752" || message.guild.id === "499409162661396481" || message.author.id === message.guild.ownerID) return;
            message.react("✅")
            message.react("❌")
    }
    if (message.channel.name === "weekly-riddle-answer") {
        let riddlerrole = message.guild.roles.find(r => r.name === "Riddle Submitted")
        message.member.addRole(riddlerrole.id)
        message.delete().catch()
        let riddleanswers = message.guild.channels.find(c => c.name === "kerlogs")
        let riddleembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
            .setTimestamp()
            .setFooter(`Riddle submitted at`)
            .setTitle(`Riddle submitted`)
            .setDescription(`${message.content}`)
        riddleanswers.send(riddleembed)
        let dmembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setDescription(`Your riddle answer has been submitted\nand Have been given the **Riddle Submitted** Role,\nWhich means you can't post another answer until next week`)
            .setTimestamp()
            .setFooter(`Answer Submitted At`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
        const dmembed2 = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.tag} I tried to dm, but their Dms are off`)
            .setDescription(`Your riddle answer has been submitted\nand Have been given the **Riddle Submitted** Role,\nWhich means you can't post another answer until next week`)
            .setFooter(`This message will delete in 10 seconds`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
        try {
            await message.author.send(dmembed)
        } catch (err) {
            message.channel.send(dmembed2).then(message => {
                message.delete(10000)
            })
        }
    }
}
