const { SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spam')
		.setDescription("This command simply spams you"),
    
    async execute(interaction) {
        interaction.reply({content:"bark", ephemeral: true})
        await wait(500)
        interaction.followUp({content:"woof", ephemeral: true})
        await wait(1000)
        interaction.followUp({content:"bark", ephemeral: true})
        await wait(500)
        interaction.followUp({content:"woof", ephemeral: true})
        await wait(1000)
        interaction.followUp({content:"bark", ephemeral: true})
        await wait(500)
        interaction.followUp({content:"woof", ephemeral: true})
        await wait(1000)
        interaction.followUp({content:"bark", ephemeral: true})
        await wait(500)
        interaction.followUp({content:"woof", ephemeral: true})
        await wait(1000)
        interaction.followUp({content:"bark", ephemeral: true})
        await wait(500)
        interaction.followUp({content:"woof", ephemeral: true})
        await wait(1000)
        interaction.followUp({content:"bark", ephemeral: true})
        await wait(500)
        interaction.followUp({content:"woof", ephemeral: true})
        await wait(1000)
        interaction.followUp({content:"bark", ephemeral: true})
        await wait(500)
        interaction.followUp({content:"woof", ephemeral: true})
        await wait(1000)
        interaction.followUp({content:"bark", ephemeral: true})
        await wait(500)
        interaction.followUp({content:"woof", ephemeral: true})
        await wait(1000)
        return;
    },
};