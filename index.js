require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    ],
});

// Nombre exacto del canal (sin emojis Unicode si da problemas)
const TARGET_CHANNEL = '🤣◥haha-funny◤🤣';

// Detecta URLs en el mensaje
const URL_REGEX = /https?:\/\/[^\s]+/i;

client.once('ready', () => {
    console.log(`Bot iniciado como ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  // Ignorar mensajes del propio bot
    if (message.author.bot) return;

  // Comprobar que es el canal correcto
    if (message.channel.name !== TARGET_CHANNEL) return;

  // Comprobar si el mensaje contiene un enlace
    if (!URL_REGEX.test(message.content)) return;

    try {
        await message.react('⬆️');
        await message.react('⬇️');
    } catch (err) {
        console.error('Error al reaccionar:', err);
    }
});

client.login(process.env.DISCORD_TOKEN);