require('dotenv').config();
const { Telegraf } = require('telegraf');
const axios = require('axios');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Привет, чтоб узнать погоду отправь мне свою геолокацию.'));

bot.hears('Привет', ctx => {
    ctx.reply('Если хочешь узнать какая погода за окном, просто напиши мне свой город');
})
bot.on('message', async (ctx) => {
console.log(ctx.message);
if (ctx.message) {
    const Url = `http://api.openweathermap.org/data/2.5/weather?q=${ctx.message.text}&appid=${process.env.OWEATHER_APIKEY}&units=metric`;
    const response = await axios.get(Url);
    console.log(response)
    ctx.reply(`Погода по городу: ${response.data.name} \nТемпература воздуха: ${response.data.main.temp} \nОщущается как: ${response.data.main.feels_like} \nСкорость ветра: ${response.data.wind.speed} M/c`);
}
});
bot.launch();
process.once('SIGINT',() => bot.stop('SIGINT'));
process.once('SIGTERM',() => bot.stop('SIGTERM'));