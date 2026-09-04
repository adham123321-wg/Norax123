import { SlashCommandBuilder } from "discord.js";
let name = "Hello";

export default { data: new SlashCommandBuilder ()
.setName ("Hello")
.setDescription ("training"),

async execute (interaction) { await interaction.reply (${name})},
};
