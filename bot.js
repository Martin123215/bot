const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', async () => {
  console.log(`Bot conectado como ${client.user.tag}`);

  const canal = await client.channels.fetch('1519365482656829561');

  await canal.send('🚚 Bot funcionando correctamente');
});

client.login(process.env.DISCORD_TOKEN);
