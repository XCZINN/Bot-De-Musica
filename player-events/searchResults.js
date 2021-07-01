module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: 'GREEN',
            author: { name: `Aqui estao os resultados para ${query}` },
            footer: { text: 'Para suporte va em bit.ly/SupportFireMusicBot' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
            console.log("search Ready")
};