const TelegramBot = require('node-telegram-bot-api');

const token = '5613723564:AAFuNhruwmZvAnlWB7TKhbe59wNr5sGT-c8';

const bot = new TelegramBot(token, {polling: true});



bot.on('message', msg => {
    const {id: id, first_name: userName} = msg.chat;

    if (/привет/gi.test(msg.text)) {
        bot.sendMessage(id, `привет ${userName}`);
    }
});

bh