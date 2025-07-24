require('dotenv').config();


// Helper function to convert "true"/"false" strings to real booleans
const toBool = (value) => value === "true";

// Owner & Bot Details
global.owner = process.env.OWNER_NUMBER;
global.nightridder = process.env.BOT_NAME || "𝑵𝑰𝑮𝑯𝑻 𝑹𝑰𝑫𝑫𝑬𝑹";
global.ownername = process.env.OWNER_NAME || "Night Ridder";
global.packname = process.env.PACK_NAME || "ðð”ð„ð„ð_ð€ððˆð“ð€-ð•ðŸ’";
global.author = process.env.AUTHOR || "𝕵𝖀𝕹𝕴𝕺𝕽 𝕰𝖅𝕰𝕯[𝖭𝗂𝗀𝗁𝗍 𝖱𝗂𝖽𝖽𝖾𝗋]";
global.channelname = process.env.CHANNEL_NAME || "𝗡𝗜𝗚𝗛𝗧 𝗥𝗜𝗗𝗗𝗘𝗥";
global.channeljid = process.env.CHANNEL_JID || "120363315231436175@newsletter";

// Auto-Features
global.autoTyping = toBool(process.env.AUTO_TYPING);
global.autoRecord = toBool(process.env.AUTO_RECORD);
global.autoViewStatus = toBool(process.env.AUTO_VIEW_STATUS);
global.AUTO_STATUS_REACT = toBool(process.env.AUTO_STATUS_REACT);
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "ðŸ’š";
global.LEVELUP = toBool(process.env.LEVELUP);
global.ANTIVIEWONCE = toBool(process.env.ANTIVIEWONCE);

global.public = process.env.PUBLIC === 'true';
// Group & Security Settings

global.ANTIDELETE = toBool(process.env.ANTIDELETE);
global.unavailable = toBool(process.env.UNAVAILABLE);
global.available = toBool(process.env.AVAILABLE);
global.autoreadmessages = toBool(process.env.AUTO_READ_MESSAGES);
global.chatbot = toBool(process.env.CHATBOT);
global.autoreact = toBool(process.env.AUTO_REACT);
global.WELCOME = toBool(process.env.WELCOME);

// Prefix & Other Settings
global.prefix = process.env.PREFIX || '.';
global.autobio = toBool(process.env.AUTO_BIO);
global.ANTI_TEMU = toBool(process.env.ANTI_TEMU);
global.ANTI_TAG = toBool(process.env.ANTI_TAG);
global.ANTICALL = toBool(process.env.ANTICALL);
global.antilink = toBool(process.env.ANTILINK);
global.antilinkkick = toBool(process.env.ANTILINK_KICK);
global.antilinkwarn = toBool(process.env.ANTILINK_WARN);

// Messages
global.mess = {
    success: process.env.MESSAGE_SUCCESS || 'ð™³ðš˜ðš—ðšŽ',
    admin: process.env.MESSAGE_ADMIN || '_*â—This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*â—This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*â—This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*â—This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*â—This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
