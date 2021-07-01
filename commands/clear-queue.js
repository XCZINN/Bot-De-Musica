exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Voce nao esta em um canal de voz!!!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma musica tocando agora`);

    client.player.clearQueue(message);

    message.channel.send(`${client.emotes.success} - A playlist foi **removida** !`);

};
