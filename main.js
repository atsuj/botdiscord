const { Client } = require("discord.js");
const client = new Client({disableEveryone: true});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("Pong!");
  if (msg.content === "test") msg.channel.send("test");
  if (msg.content === "wala") msg.channel.send("radimeuh");
});

client.login("NjI2NzcwNjY3NDE2ODQ2MzY3.XY3Q7Q.dc3HE52gxaVu9dPt68GlJqymy1E");
