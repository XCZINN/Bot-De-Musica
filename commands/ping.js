exports.run = async (client, message) => {

    message.channel.send(`${client.emotes.success} - O ping atual é : **${client.ws.ping}ms** !`)

};
