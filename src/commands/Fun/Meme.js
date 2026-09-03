import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('meme')
    .setDescription('Sends a random meme!'),

  category: 'Fun',

  async execute(interaction) {
    const memes = [
      '💀 Bro really thought he cooked.',
      '😭 Bro is NOT him.',
      '😂 Who let bro cook?!',
      '💀 Ain’t no way 😭',
      '🗿 Bro entered NPC mode.',
      '😭 We are NOT surviving this.',
      '💀 That was NOT in the tutorial.',
      '😂 What did I just witness?',
      '😭 Bro really said “watch this.”',
      '💀 Mission failed successfully.'
    ];

    await interaction.reply(
      memes[Math.floor(Math.random() * memes.length)]
    );
  },
};
