const { SlashCommandBuilder} = require('discord.js');
const { request } = require('undici');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('crizfacts')
		.setDescription("learn about the criz creatures!"),

	async execute(interaction) {
		const  crizfacts  = await request('https://some-random-api.ml/animal/raccoon');
        const { fact } = await crizfacts.body.json();
		return interaction.reply({content:fact});
    },
};