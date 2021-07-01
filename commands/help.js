exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'GREEN',
            author: { name: 'Comandos do bot' },
            footer:{ text: 'Para suporte va em bit.ly/SupportFireMusicBot' },
            fields: [
                { name: 'Comandos', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`, `ping`' },
            ],
            timestamp: new Date(),
            description: `****`,
        },
    });

};
