module.exports = (client, message, playlist) => {

    message.channel.send(`${client.emotes.music} - ${playlist.title} foi adicionado na playlist (**${playlist.items.length}** musicas) !`);
            console.log("Para suporte va em bit.ly/SupportFireMusicBot")
};