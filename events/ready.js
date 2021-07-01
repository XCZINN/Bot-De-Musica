module.exports = async (client) => {

  console.log(`[ ${client.user.username} ] is ready`);
 


    client.user.setActivity(client.config.game);

};
