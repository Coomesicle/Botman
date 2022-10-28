const { SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;


module.exports = {
	data: new SlashCommandBuilder()
		.setName('funny')
		.setDescription("Bot say funny thing ")
        .addIntegerOption(option =>
            option.setName('howfunny')
                .setDescription('higher number = more funny')
                .setMaxValue(900)
                .setMinValue(-4)
                .setRequired(true)),

	async execute(interaction) {
		interaction.reply("Who?")
        await wait(10000)
        interaction.followUp('asked!!!')
		return;
    },
};