const { SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spam')
		.setDescription("This command simply spams you"),
    
        async execute(interaction) {
            interaction.reply("bark")
            await wait(5)
            interaction.followup("woof")
            await wait(10)
            interaction.followup("bark")
            await wait(5)
            interaction.followup("woof")
            await wait(10)
            interaction.followup("bark")
            await wait(5)
            interaction.followup("woof")
            await wait(10)
            interaction.followup("bark")
            await wait(5)
            interaction.followup("woof")
            await wait(10)
            interaction.followup("bark")
            await wait(5)
            interaction.followup("woof")
            await wait(10)
            interaction.followup("bark")
            await wait(5)
            interaction.followup("woof")
            await wait(10)
            interaction.followup("bark")
            await wait(5)
            interaction.followup("woof")
            await wait(10)
            return;
        },
    };