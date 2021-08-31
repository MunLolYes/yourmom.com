const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log("Bot started!");
});

client.on('messageCreate', message => {
    if (message.content === '$mom') {
      message.channel.send('moms are epic');
    }
  });

client.on('messageCreate', message => {
  if (message.content === "$rank") {
    message.channel.send("Nope, not that type of bot.");
  }
});

client.login("ODgxODU4OTQyMjE5NzM1MDYw.YSy9Iw.98z2R8lJGzYZ0Y3xw-X3LZkejc0");
