const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const config = require("./config.json");
const client = new CommandoClient({
    commandPrefix: '£',
    unknownCommandResponse: false,
    owner: '<Matt-Bot#3776 >',
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['group1', 'Our First Command Group']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setGame('http://billbot.xyz/');
});

client.login(config.token);