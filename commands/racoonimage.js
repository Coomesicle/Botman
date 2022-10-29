const { SlashCommandBuilder} = require('discord.js');
const { request } = require('undici');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('randomcriz')
		.setDescription("gets image of random criz"),

	async execute(interaction) {
		const raccoon = await request('https://some-random-api.ml/animal/raccoon');
		const { image } = await raccoon.body.json();
		return interaction.reply({ files: [image] });
    },
};