module.exports = (client, error, message) => {

    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Nenhuma musica tocando no momento`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Voce nao esta conectado em um canal`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Eu nao consigo entrar na call por favor cheque minhas permissoes`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Eita alguma coisa esta errada : ${error}`);
            console.log("Para suporte va em bit.ly/SupportFireMusicBot")
    };

};
