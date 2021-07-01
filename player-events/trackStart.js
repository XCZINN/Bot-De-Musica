module.exports = (client, message, track) => {
	message.channel.send(
		`${client.emotes.music} - Agora tocando ${track.title} em ${
			message.member.voice.channel.name
		} ...`
	);
};
