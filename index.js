const { Client, Intents } = require("discord.js");
const { token } = require("./config");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});

// function getPlayers() {
//     updatePlayerCount: (client, seconds) => {

//     }
// }

client.once("ready", async () => {
  setInterval(() => {
    console.log("มองเหี้ยไร!!!!");
    let status = `${GetNumPlayerIndices()} Player`;
    client.user.setActivity(status, {
      type: "STREAMING",
      url: "https://www.twitch.tv/an_idiots_guide",
    });
    console.log(status);
  },5* 5000);
});

client.login(token);
