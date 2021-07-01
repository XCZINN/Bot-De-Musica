module.exports = (client, message, query, tracks, content, collector) => {

    message.channel.send(`${client.emotes.error} - 
    voce tem que digitar um numero entre **1** e **${tracks.length}** !`);
            console.log("Para suporte va em bit.ly/SupportFireMusicBot")
};