const { SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('everyonehatesyou')
		.setDescription("Find out if everyone doesn't like you"),

	async execute(interaction) {
		interaction.reply({content: "Everyone hates you and lives in your walls", ephemeral: true})
		await wait(3000)
		interaction.editReply('Rip of your skin do it now do it now')
		return;
	},
};
