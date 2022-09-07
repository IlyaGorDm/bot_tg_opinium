const TelegrammApi = require('node-telegram-bot-api');

const TOKEN = '5680976964:AAE89myjXymB60QxzHx4Bn-EOBvEmR_XPOg'

const bot = new TelegrammApi(TOKEN, { polling: true })

bot.on('message', msg => {

    const chatId = msg.chat.id;

    if (msg.text === '/start') {
        bot.sendMessage(chatId, 'Добро пожаловать в OPIUM SEED!🎩' + '\n' + 'Мы команда, которая занимается оптовой скупкой Seed-фраз/PrivateKey по самым выгодным ценам на рынке🔥' + '\n' + 'Скупка под наши запросы и бонусы для постоянных клиентов сервиса♨️');
    }
    if (msg.text === '/info') {
        bot.sendMessage(chatId, 'OPIUM SEED - скупка Seed-Фраз/PrivateKey');
    }


    bot.sendMessage(chatId, '↓', {
        reply_markup: {
            keyboard: [
                ['Продать'], ['Помощь'],
                ['Реферальная система'], ['Наши проекты']
            ]
        }
    });


    if (msg.text === 'Продать') {
        const msgProdazha1 = '\n' + '\n' + '✅Мы принимаем seed-фразы и privatekey, на которых была хотя бы 1 транзакция BTC/LTC';
        const msgProdazha2 = '\n' + '\n' + '✅Поставляемые данные должны быть валидными';
        const msgProdazha3 = '\n' + '\n' + '✅Минимально количество поставляемых seed-фраз/privatekey -15 штук, в формате строк, текстовым файлом/сообщением';
        const msgProdazha4 = '\n' + '\n' + '✅Проверка данных осуществляется в течении 12 (Поставки после 20:00МСК до 24 часов)';
        const msgProdazha5 = '\n' + '\n' + '✅Оплата за валидную строку составляет 120-140₽(зависит от количества транзакций)';
        const msgProdazha6 = '\n' + '\n' + '❎К поставке запрещены автореги, нарушители будут заблокированы';

        bot.sendMessage(chatId, '❗️Для начала сотрудничества с нами внимательно ознакомьтесь с Правилами партнерской программы:' + msgProdazha1 + msgProdazha2 + msgProdazha3 + msgProdazha4 + msgProdazha5 + msgProdazha6 + '\n' + '\n')


        bot.sendMessage(chatId, '↓', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Продолжить',
                            callback_data: '5',
                        }
                    ]
                ]
            }
        });

    }
 
   

    if (msg.text === 'Помощь') {
        return bot.sendMessage(chatId, '📩 Оператор:@opiumseed_operator')
    }
    else if (msg.text === 'Реферальная система') {
        bot.sendMessage(chatId, 'Для приглашения людей к сотрудничеству от вас, просите указывать его ваш тег при поставке, вы будете получать 10%🔥 От выводов вашего реферала, он не будет терять ничего от своей прибыли💸')
    }
    else if (msg.text === 'Наши проекты') {
        return bot.sendMessage(chatId, 'Coming soon...' + '\n' + '\n' + 'Мы активно работаем над новыми проектами, которые смогут упросить вам жизнь, дадут вам возможность заработать или смогут дать вам полезную информацию')
    }
})

bot.on('callback_query', (quere) => {
    console.log(quere);
    chatId = quere.from.id;
    if (quere.data == '5') {
        return bot.sendMessage(chatId, 'Для поставки напишите оператору @opiumseed_operator "Поставка", укажите пригласившего вас человека(если присутствует) и пришлите ваши seed-фразы/privatekey🔱')
    }
})
