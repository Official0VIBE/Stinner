const { Client, GatewayIntentBits, Partials, Collection, IntentsBitField } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	], 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] 
});
const config = require('./config.json');
require('dotenv').config()
client.aliases = new Collection()
client.slashCommands = new Collection();
module.exports = client;
const fs = require('node:fs');
fs.readdirSync('./handlers').forEach((handler) => {
  require(`./handlers/${handler}`)(client)
});
require('./Intervals');
// سوي ملف .env
client.login(process.env.TOKEN);


