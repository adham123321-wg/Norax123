import { SlashCommandBuilder } from 'discord.js';
import { allowUser } from '../../utils/botAccess.js';

export default {
  data: new SlashCommandBuilder()
    .setName('allow')
    .setDescription('Allow someone to use the bot')
    .addUserOption(option =>
      option
        .setName('user')
        .setDescription('The user to allow')
        .setRequired(true)
    ),

  async execute(interaction) {
    if (interaction.user.id !== interaction.guild.ownerId) {
      return interaction.reply({
        content: '❌ Only the server owner can use this command.',
        ephemeral: true
      });
    }

    const user = interaction.options.getUser('user');

    allowUser(user.id);

    await interaction.reply(`✅ ${user} is now allowed to use the bot!`);
  },
};
