exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Voce nao esta em um canal de voz`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Por favor diga o nome da musica!`);

    client.player.play(message, args.join(" "));

};
