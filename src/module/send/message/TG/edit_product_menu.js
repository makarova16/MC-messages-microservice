const axios = require("axios");

const edit_product_menu = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text:
        "Назва товару: Футболка для дівчинки\nКатегорія: Футболки\nОпис: 100% бавовна, розмір 68 (зріст 122 см)\nЦіна: 300 грн\nКартинка: посилання на фото\n\nВиберіть що будемо робити з товаром",
      reply_markup: {
        keyboard: [
          [{ text: "Змінити назву" }],
          [{ text: "Змінити категорію" }],
          [{ text: "Змінити опис" }],
          [{ text: "Змінити ціну" }],
          [{ text: "Змінити картинку" }],
          [{ text: "Видалити товар" }],
          [{ text: "<< Назад до вибору товару" }],
          [{ text: "Повернутися до вибору категорії" }],
          [{ text: "Повернутися тоді з товаром" }],
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

module.exports = { edit_product_menu };
