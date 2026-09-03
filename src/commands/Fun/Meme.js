import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('meme')
    .setDescription('Sends a meme!'),

  category: 'Fun',

  async execute(interaction) {
    await interaction.reply('💀 BRO REALLY THOUGHT HE COULD ESCAPE 😭');
  },
};
