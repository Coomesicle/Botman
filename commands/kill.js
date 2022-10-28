const { SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;


module.exports = {
	data: new SlashCommandBuilder()
		.setName('kill')
		.setDescription('Kills the user')
        .addUserOption(option => option.setName('target').setDescription('The user to murder!!!').setRequired(true)),

	async execute(interaction) {
		const user = interaction.options.getUser('target');
        if(user.username=='CrizBot') return interaction.reply('Crizbot doesnt die u noob! L+Radio');
		interaction.reply(`Killing: ${user.username}`);
        await wait(100)
        interaction.followUp({content:'They Was not the Imposter!'});
        return;
    },
    
};