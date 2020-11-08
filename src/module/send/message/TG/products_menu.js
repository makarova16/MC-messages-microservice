const axios = require("axios");

const products_menu = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text: "Використовуй клавіатуру нижче, щоб вибрати необхідну команду 👇",
      reply_markup: {
        keyboard: [
          [{ text: "Створити новий товар" }],
          [{ text: "Редагувати товар" }],
          [{ text: "Деактивувати товар" }],
          [{ text: "Додати товари із Google Sheets" }],
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

module.exports = { products_menu };
