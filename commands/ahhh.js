const { SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ahhh')
		.setDescription("This command doesn't do anything "),

	async execute(interaction) {
		interaction.reply("I live in your walls")
		await wait(2000)
        interaction.deleteReply()
		return;
    },
};