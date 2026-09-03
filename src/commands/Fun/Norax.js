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

import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('ytdrop')
    .setDescription('Announce a new Norax YouTube video!')
    .addStringOption(option =>
      option
        .setName('link')
        .setDescription('The YouTube video link')
        .setRequired(true)
    ),

  category: 'Fun',

  async execute(interaction) {
    const link = interaction.options.getString('link');

    const embed = new EmbedBuilder()
      .setTitle('🚨 NEW NORAX VIDEO! 🚨')
      .setDescription(`🔥 **NORAX JUST DROPPED!**\n\n🎬 [WATCH THE VIDEO](${link})`)
      .setTimestamp();

    await interaction.reply({
      content: '🚨 **NEW VIDEO DROP!** 🚨',
      embeds: [embed]
    });
  },
};
