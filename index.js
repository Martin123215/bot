const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const cron = require('node-cron');
const config = require('./config.json');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

let activities = [];

function loadActivities() {
  if (fs.existsSync('./activities.json')) {
    activities = JSON.parse(fs.readFileSync('./activities.json', 'utf8'));
  }
}

function saveActivities() {
  fs.writeFileSync('./activities.json', JSON.stringify(activities, null, 2));
}

client.on('ready', () => {
  console.log(`✅ Bot conectado como ${client.user.tag}`);
  loadActivities();
});

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith("!actividad") || message.author.bot) return;

  const args = message.content.split(" ").slice(1);
  const hora = args[0];  // formato: HH:MM
  const texto = args.slice(1).join(" ");

  if (!hora || !texto || !/^\d{2}:\d{2}$/.test(hora)) {
    return message.reply("❌ Formato incorrecto. Usa: `!actividad HH:MM Descripción` (por ejemplo: `!actividad 18:30 Reunión secreta`)");
  }

  activities.push({
    hora,
    texto
  });

  saveActivities();
  message.reply(`✅ Actividad diaria guardada para las ${hora}: "${texto}"`);
});

// Notificar cada minuto
cron.schedule('* * * * *', async () => {
  const ahora = new Date();
  const horaActual = ahora.toTimeString().slice(0, 5); // HH:MM

  for (const act of activities) {
    if (act.hora === horaActual) {
      const canal = await client.channels.fetch(config.channelId);
      if (canal) {
        canal.send(`📢 Actividad programada: **${act.texto}** (son las ${act.hora})`);
      }
    }
  }
});

client.login(config.token);
