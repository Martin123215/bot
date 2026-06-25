const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', async () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
