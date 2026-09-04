import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Shows information about a member"),

  async execute(interaction) {
    await interaction.reply(
      `Username: ${interaction.user.username}
User ID: ${interaction.user.id}
Account created: ${interaction.user.createdAt}`
    );
  }
};
