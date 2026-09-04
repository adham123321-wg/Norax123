import { SlashCommandBuilder } from "discord.js";
let name = "Hello";

export default { data: new SlashCommandBuilder ()
.setName ("hello")
.setDescription ("training"),

async execute (interaction) { await interaction.reply (`${name}`)},
};
