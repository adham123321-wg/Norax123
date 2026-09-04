import { SlashCommandBuilder } from "discord.js";

let yes = "you are staff!";
let no = "you are not staff!";

export default {
  data: new SlashCommandBuilder()
    .setName("check")
    .setDescription("checks if you're staff"),

  async execute(interaction) {
    if (interaction.member.roles.cache.some(
      role => role.name === "staff team"
    )) {
      await interaction.reply({
        content: yes,
        ephemeral: true
      });
    } else {
      await interaction.reply({
        content: no,
        ephemeral: true
      });
    }
  }
};
