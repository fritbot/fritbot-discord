const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fb_ping')
		.setDescription('Pings the bot to make sure it is awake.'),
	async execute(interaction) {
		await interaction.reply("I'm not a goddamn submarine, I can hear you.");
	},
};
