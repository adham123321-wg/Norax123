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

  async execute(interaction) {
    const link = interaction.options.getString('link');

    const embed = new EmbedBuilder()
      .setTitle('🚨 NEW NORAX VIDEO DROPPED! 🚨')
      .setDescription(
        `🔥 **NORAX JUST DROPPED A NEW VIDEO!**\n\n` +
        `🎬 Go watch it NOW!\n\n` +
        `👉 [**WATCH THE VIDEO**](${link})`
      )
      .setFooter({ text: 'Norax YouTube • New video alert' })
      .setTimestamp();

    await interaction.reply({
      content: '@everyone',
      embeds: [embed],
      allowedMentions: { parse: ['everyone'] }
    });
  },
};
