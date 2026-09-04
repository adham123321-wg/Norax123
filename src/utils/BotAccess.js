import fs from 'fs';

const file = './data/botAccess.json';

if (!fs.existsSync('./data')) {
  fs.mkdirSync('./data');
}

if (!fs.existsSync(file)) {
  fs.writeFileSync(file, JSON.stringify([]));
}

function getAllowedUsers() {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function saveAllowedUsers(users) {
  fs.writeFileSync(file, JSON.stringify(users, null, 2));
}

export function isAllowed(userId) {
  return getAllowedUsers().includes(userId);
}

export function allowUser(userId) {
  const users = getAllowedUsers();

  if (!users.includes(userId)) {
    users.push(userId);
    saveAllowedUsers(users);
  }
}

export function removeUser(userId) {
  const users = getAllowedUsers().filter(id => id !== userId);
  saveAllowedUsers(users);
}
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
};import { SlashCommandBuilder } from 'discord.js';
import { removeUser } from '../../utils/botAccess.js';

export default {
  data: new SlashCommandBuilder()
    .setName('removeaccess')
    .setDescription('Remove someone's bot access')
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
};if (!isAllowed(interaction.user.id)) {
  return interaction.reply({
    content: '❌ You are not allowed to use this bot.',
    ephemeral: true
  });
  }
