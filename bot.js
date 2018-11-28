const Discord = require('discord.js');
const Canvas = require('canvas');

const client = new Discord.Client();   
const fs = require("fs"); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const queue = new Map(); 
client.on('ready', () => {
    console.log('----------------');
  console.log('By Heven');
console.log('----------------');
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` ON ${client.guilds.size}  Test `,"https://www.twitch.tv/")//حالة ستريمنق البنفسجي
client.user.setStatus("dnd")//يمكنك تغير حالة الى اون onlineلاين او idleمشغول او  غير موجود dnd
});






client.login (token)
