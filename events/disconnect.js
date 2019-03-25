module.exports.run = (bot) => {
    console.log(`${bot.user.username} Has Been Disconnected/Restarted. At: ${new Date()}`);
    bot.user.setPresence({
        status: "online",
        game: {
            name: "The Tardis!",
            type: "PLAYING"
        }
    })
}