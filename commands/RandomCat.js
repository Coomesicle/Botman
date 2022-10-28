const { SlashCommandBuilder} = require('discord.js');
const { request } = require('undici');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('getacat')
		.setDescription("Meow!"),

	async execute(interaction) {
		const catResult = await request('https://aws.random.cat/meow');
		const { file } = await catResult.body.json();
		return interaction.reply({ files: [file] });
    },
};