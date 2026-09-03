
import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('meme')
    .setDescription('Sends a random meme!'),

  category: 'Fun',

  async execute(interaction) {
    const memes = [
      '💀 Bro really said “trust me” and made everything worse.',
      '😭 Nobody: Me at 3 AM: “I have an idea.”',
      '🗿 Bro has achieved maximum NPC energy.',
      '💀 The confidence was there. The skill was not.',
      '😂 Task failed successfully.',
      '😭 We are NOT beating the allegations.',
      '💀 Bro really thought we wouldn’t notice.',
      '🗿 My last brain cell is fighting for its life.',
      '😂 This is why we can’t have nice things.',
      '😭 It can’t get worse. Famous last words.',
      '💀 Bro is speedrunning embarrassment.',
      '😂 That was certainly a decision.',
      '😭 I looked away for TWO SECONDS.',
      '💀 Bro pressed every button except the correct one.',
      '😂 Someone please explain what I just witnessed.',
      '😭 The brain cell has left the chat.',
      '💀 Bro thought the laws of physics were optional.',
      '🗿 No thoughts. Head empty. Maximum chaos.',
      '😂 We need a replay because WHAT was that?',
      '😭 This belongs in the history books.',
      '💀 Bro activated the secret ending.',
      '😂 Nobody was prepared for that plot twist.',
      '😭 My expectations were low and somehow you still surprised me.',
      '💀 Bro is fighting invisible enemies.',
      '🗿 This server has officially lost the plot.',
      '😂 Peak comedy. Completely accidental.',
      '😭 Somebody call the developers.',
      '💀 The plot armor is CRAZY.',
      '😂 Bro woke up and chose problems.',
      '😭 I’m going to pretend I didn’t see that.',
      '💀 The Wi-Fi saw what you were doing and gave up.',
      '😂 10/10 entertainment. 0/10 decision-making.',
      '😭 We may never recover from this.',
      '💀 Bro unlocked a new level of confusion.',
      '🗿 Absolutely majestic levels of nonsense.',
      '😂 And that is why we have rules.',
      '😭 I cannot believe this is real.',
      '💀 Bro just created a problem nobody asked for.',
      '😂 The situation is under control. There is no control.',
      '😭 This is going straight into the server history.',
      '💀 Bro is running on 2% battery and pure determination.',
      '😂 Imagine explaining this to someone from 2010.',
      '😭 The server needs a timeout.',
      '💀 That plan lasted approximately 4 seconds.',
      '😂 Bro entered the server and chose chaos.',
      '😭 My brain has stopped responding.',
      '💀 Confidence: 100%. Accuracy: 0%.',
      '😂 That was not part of the tutorial.',
      '😭 We have officially entered nonsense territory.'
    ];

    const meme = memes[Math.floor(Math.random() * memes.length)];

    await interaction.reply(meme);
  },
};
