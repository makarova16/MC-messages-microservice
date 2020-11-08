const axios = require("axios");

const main_menu = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text: "Використовуй клавіатуру нижче, щоб вибрати необхідну команду 👇",
      reply_markup: {
        keyboard: [
          [{ text: "Редагувати загальну інформацію про магазин" }],
          [{ text: "Pедагувати контактну інформацію" }],
          [{ text: "Дії з категоріями товарів" }],
          [{ text: "Дії з товарами" }],
          [{ text: "Сповіщення" }],
          [{ text: "Розсилка повідомлення" }],
          [{ text: "Редагувати загальну інформацію про магазин" }],
          [{ text: "Режими відображення товарів" }],
          [{ text: "Отримати звіт запитів на дзвінок" }],
          [{ text: "Отримати звіт заявок на покупки" }],
          [{ text: "Отримати звіт відгуків клієнтів" }],
        ],
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

module.exports = { main_menu };
