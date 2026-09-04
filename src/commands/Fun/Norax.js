import { SlashCommandBuilder } from "discord.js";

let name = "norax is the goat";

export default {
  data: new SlashCommandBuilder()
    .setName("norax")
    .setDescription("says something about norax"),

  async execute(interaction) {
    await interaction.reply(`${name}`);
  },
};
