const { SlashCommandBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('intro')
		.setDescription('Get to know CrizBot!'),

	async execute(interaction) {
		return interaction.reply("Hello " + "! I'm your friendly Crizbot!, some dumb idiot named Stephen made me, I'm not sure what I do yet but I'll learn quite quickly!");
	},
};
