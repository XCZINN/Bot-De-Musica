exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Voce nao esta em um canal de voz`);

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - nenhuma musica tocando agora`);

    message.channel.send(`**Lista do server - ${message.guild.name} ${client.emotes.queue}**\nAtual : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
        return `**#${i + 1}** - ${track.title} | ${track.author} (Pedido por : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** Outros sons` : `Na playlist **${queue.tracks.length}** sons...`}`));

};
