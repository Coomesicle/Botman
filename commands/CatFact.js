const { SlashCommandBuilder} = require('discord.js');
const { request } = require('undici');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('catfacts')
		.setDescription("learn about the furry creatures!"),

	async execute(interaction) {
		const  catResult  = await request('https://catfact.ninja/fact?max_length=140');
        const { fact } = await catResult.body.json();
		return interaction.reply({content:fact});
    },
};