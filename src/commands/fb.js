const fs = require('node:fs');
const path = require('node:path');
const { SlashCommandBuilder } = require('discord.js');

const commandsPath = path.join(__dirname, 'fb_subcommands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));


const slashCommand = new SlashCommandBuilder()
    .setName('fb')
    .setDescription("Hi, I'm Fritbot!")

const subCommands = {}

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    slashCommand.addSubcommand(command.build);
    subCommands[command.name] = command.execute
}

module.exports = {
	data: slashCommand,
	async execute(interaction) {
		const subCommandName = interaction.options.getSubcommand()
        const subCommand = subCommands[subCommandName]

        if (subCommand) {
            await subCommand(interaction)
        } else {
            await interaction.reply("I'm not sure what happened, but it broke.")
        }
        
	},
};
