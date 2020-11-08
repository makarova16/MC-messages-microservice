const axios = require("axios");

const example = async (chat_id, options, token) => {
    try { 

        const { name, description, schedule, address } = options;
        const data = JSON.stringify({
            chat_id,
            text: `Загальна інформація про магазин:\n\nНазва : ${name}\nОпис : ${description}\nРозклад роботи : ${schedule}\nАдреса : ${address}`,
            reply_markup: {
                keyboard: [
                    [{ text: "Змінити інформацію про магазин" }],
                    [{ text: "<<Назад" }]
                ],
                resize_keyboard: true,
            },
        });

        const config = {
            method: 'post',
            url: `https://api.telegram.org/bot${token}/sendMessage`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const response = await axios(config);

        return { requestConfig: config, responseData: response.data };
      } catch (error) {
        console.log(error);
      }
};

module.exports = { example };