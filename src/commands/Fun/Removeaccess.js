import { SlashCommandBuilder } from 'discord.js';
import { removeUser } from '../../utils/botAccess.js';

export default {
  data: new SlashCommandBuilder()
    .setName('removeaccess')
    .setDescription("Remove someone's bot access")
    .addUserOption(option =>
      option
        .setName('user')
        .setDescription('The user to remove')
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

    removeUser(user.id);

    await interaction.reply(`🚫 ${user} can no longer use the bot!`);
  },
};
