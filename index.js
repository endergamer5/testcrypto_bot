

const Telegraf = require('telegraf');
const app = new Telegraf(1093223901:AAGJI6cWTteMTt3Z7VVliiO83Gu-Of70l-M);

app.hears('hi', ctx => {
 return ctx.reply('Hey!');
});

app.startPolling();