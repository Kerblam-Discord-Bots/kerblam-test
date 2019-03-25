const Discord = require('discord.js');
module.exports.run = async (bot, channel) => {
    if (channel.type === "dm") return undefined;
    let kerlogs = channel.guild.channels.find(c => c.name === "kerlogs");
    if (!kerlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor('Channel Created', channel.guild.iconURL)
        .setFooter(`ID: ${channel.id}`)
        .setTimestamp()
        .setDescription(`_ _►Name<#${channel.id}> (**${channel.name}**) \n ►Type **${channel.type}** \n ►ID **${channel.id}**`)
    await kerlogs.send(botembed);
}
