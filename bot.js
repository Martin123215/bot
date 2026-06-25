writing{variant="document" id="51842"}
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const cron = require('node-cron');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const CANAL_ID = '1519365482656829561';
const ROL_ID = '1519522915627044966';

client.once('ready', async () => {
  console.log(`Bot conectado como ${client.user.tag}`);

  console.log(
    'Hora actual Chile:',
    new Date().toLocaleString('es-CL', {
      timeZone: 'America/Santiago'
    })
  );

  cron.schedule('0 14 * * 3', async () => {
    const canal = await client.channels.fetch(CANAL_ID);

    const embed = new EmbedBuilder()
      .setTitle('🚚 MISIÓN DE TRÁFICO ILEGAL AVANZADO')
      .setDescription('En 15 minutos comienza una actividad competitiva.')
      .addFields({
        name: '📋 Instrucciones',
        value: 'Ve en búsqueda de la carga y entrégala.'
      })
      .setColor('#0099ff')
      .setImage('https://i.imgur.com/8Km9tLL.jpg')
      .setTimestamp();

    await canal.send({
      content: '<@&1519522915627044966>',
      embeds: [embed]
    });

  }, {
    timezone: 'America/Santiago'
  });

  cron.schedule('0 21 * * 3', async () => {
    const canal = await client.channels.fetch(CANAL_ID);

    const embed = new EmbedBuilder()
      .setTitle('🚚 MISIÓN DE TRÁFICO ILEGAL AVANZADO')
      .setDescription('Comienza una nueva actividad.')
      .setColor('#00ff66')
      .setTimestamp();

    await canal.send({
      content: '<@&1519522915627044966>',
      embeds: [embed]
    });

  }, {
    timezone: 'America/Santiago'
  });
});

client.login(process.env.DISCORD_TOKEN);
