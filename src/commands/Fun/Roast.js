import { SlashCommandBuilder } from 'discord.js';

const roasts = [
  'Your Wi-Fi has more personality than you do. 😭',
  'Bro is running on 1% brain battery. 🔋',
  'You bring everyone so much joy... when you leave. 💀',
  'Even the loading screen has more progress than you. 😭',
  'Your gaming skills need a software update. 😂',
  'Bro really thought that was a good idea. 💀'
];

export default {
  data: new SlashCommandBuilder()
    .setName('roast')
    .setDescription('Lightly roasts a user!')
    .addUserOption(option =>
      option
        .setName('user')
        .setDescription('Who should get roasted?')
        .setRequired(true)
    ),

  category: 'Fun',

  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const roast = roasts[Math.floor(Math.random() * roasts.length)];

    await interaction.reply(`${user}, ${roast}`);
  },
};
