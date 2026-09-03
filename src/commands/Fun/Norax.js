import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('norax')
    .setDescription('Says something about Norax!'),

  category: 'Fun',

  async execute(interaction) {
    await interaction.reply('NORAX IS THE GOAT! 🐐');
  },
};
