const { REST, Routes } = require("discord.js");
require("dotenv").config();

const commands = [];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Deploying commands...");

    await rest.put(
      Routes.applicationCommands("1534883258574049381"),
      { body: commands }
    );

    console.log("Commands deployed successfully!");
  } catch (error) {
    console.error(error);
  }
})();
