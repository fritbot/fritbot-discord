const { userMention } = require('discord.js')

module.exports = {
    name: 'annoy',
    build: subcommand =>
        subcommand
            .setName('annoy')
            .setDescription('Annoy someone in a totally random manner')
            .addUserOption(option => option
                .setName('target')
                .setDescription('Target')
            ),
    execute: async interaction => {
        const user = interaction.options.getUser('target')

        if (user) {
            await interaction.reply(`${userMention(user.id)} is a poopyhead`)
        } else if (target) {
            await interaction.reply(`${target} is a poopyhead`)
        } else {
            await interaction.reply(`${interaction.user.username} is a moron and forgot to tell me who to annoy`)
        }
    }

}