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

    await interaction.reply(`🚫 ${user} can no longer use the bot!`);
  },
};if (!isAllowed(interaction.user.id)) {
  return interaction.reply({
    content: '❌ You are not allowed to use this bot.',
    ephemeral: true
  });
  }
