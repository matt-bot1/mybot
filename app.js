const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setGame('http://billbot.xyz/');
});
const prefix = "£";
client.on("message", (message) => {
  if (message.content.startsWith("hi bot")) {
    message.channel.send("hello good sir");
  } else
  if (message.content.startsWith(prefix + "bot")) {
    message.channel.send("you rang");
  }
});
client.on('message', message => {
  if (message.content === 'what is my avatar') {
    message.reply(message.author.avatarURL);
  }
});
client.login(config.token);