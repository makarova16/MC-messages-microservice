const axios = require("axios");

const main_info = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text:
        "Загальна інформація про магазин:\n\nНазва : У Тарасика\nОпис : Магазин спеціалізується на дитячому одязі\nРозклад роботи : Пн-Пт 10:00-18:00\n                                Сб, Нд - вихідний\nАдреса : м. Рожнятів",
      reply_markup: {
        keyboard: [
          [{ text: "Змінити інформацію про магазин" }],
          [{ text: "<<Назад" }],
        ],
        resize_keyboard: true,
      },
    });

    const config = {
      method: "post",
      url: `https://api.telegram.org/bot${token}/sendMessage`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);

    return { requestConfig: config, responseData: response.data };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { main_info };
