const axios = require("axios");

const new_product_done = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text:
        "Було успішно створено такий товар:\n\nНазва товару: Футболка для дівчинки\nКатегорія: Футболки\nОпис: 100% бавовна, розмір 68 (зріст 122 см)\nЦіна: 300 грн\nКартинка: посилання на фото",
      reply_markup: {
        keyboard: [
          [{ text: "Повернутися до дій з товаром" }],
          [{ text: "Повернутися до головного меню" }],
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

module.exports = { new_product_done };
