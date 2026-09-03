import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('meme')
    .setDescription('Sends a meme!'),

  category: 'Fun',

  async execute(interaction) {
    const memes = [
      '💀 Bro really thought he cooked.',
      '😭 Bro is NOT him.',
      '😂 Who let bro cook?!',
      '💀 Ain’t no way 😭',
      '🗿 Bro entered NPC mode.'
    ];

    await interaction.reply(
      memes[Math.floor(Math.random() * memes.length)]
    );
  },
};
