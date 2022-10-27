const { SlashCommandBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ahhh')
		.setDescription("This command doesn't do anything "),

	async execute(interaction) {
		interaction.reply("I live in your walls");
        interaction.deleteReply();
		return;
    },
};