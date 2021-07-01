exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Voce nao esta em um canal de voz`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - nenhuma musica tocando agora`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Por favor digite um numero`);

    if (isNaN(args[0]) || 100 < args[0] || args[0] <= 0) return message.channel.send(`${client.emotes.error} - Por favor digite um numero entre (1 e 100) !`);

    if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) return message.channel.send(`${client.emotes.error} - Por favor digite um numero`);

    client.player.setVolume(message, parseInt(args[0]));

    message.channel.send(`${client.emotes.success} - Volume mudado para **${args.join(" ")}%** !`);

};
