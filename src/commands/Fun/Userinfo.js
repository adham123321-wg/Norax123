import { SlashCommandBuilder } from "discord.js";

export default { data: new SlashCommandBuilder ()
.setName ("userinfo")
.setDescription ("Gets information about a user")
.addUserOption ( option => option
.setName ("user")
.setDescription ("choose the user")
.setRequired(true)),

async execute (interaction) { const user = interaction.options.getUser ("user");
await interaction.reply
( `username: ${user.username }
userID: ${ user.id }
Account created ${ user.createdAt });
},
};
