exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Voce nao esta em um canal de voz!!!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - nenhuma musica tocando agora`);

    const track = await client.player.nowPlaying(message);
    const filters = [];

    Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
        if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
    });

    message.channel.send({
        embed: {
            color: 'GREEN',
            author: { name: track.title },
            footer: { text: 'For support go to bit.ly/SupportFireMusicBot' },
            fields: [
                { name: 'Canal', value: track.author, inline: true },
                { name: 'Pedido por', value: track.requestedBy.username, inline: true },
                { name: 'Da playlist', value: track.fromPlaylist ? 'Sim' : 'Nao', inline: true },

                { name: 'Visualizacoes', value: track.views, inline: true },
                { name: 'Duracao', value: track.duration, inline: true },
                { name: 'Filtros ativados', value: filters.length, inline: true },

                { name: 'Barras de progresso', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });

};
