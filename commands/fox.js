const { SlashCommandBuilder} = require('discord.js');
const { request } = require('undici');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('foxforsale')
		.setDescription("what does it say?"),

	async execute(interaction) {
		const fox = await request('https://randomfox.ca/floof/');
		const { image } = await fox.body.json();
		return interaction.reply({ files: [image] });
    },
};