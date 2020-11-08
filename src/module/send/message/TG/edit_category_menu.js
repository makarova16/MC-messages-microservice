const axios = require("axios");

const edit_category_menu = async (chat_id, options, token) => {
  try {
    const { category_name, category_image, category_status, product_count} = options;
    const data = JSON.stringify({
      chat_id,
      text:
        `Назва категорії: ${category_name} \nПосилання на картинку категорії: ${category_image}\nСтатус: ${category_status}\nКількість товарів: ${product_count}\n\nВиберіть що будемо робити з категорією`,
      reply_markup: {
        keyboard: [
          [{ text: "Змінити назву" }],
          [{ text: "Змінити послання на картинку категорії" }],
          [{ text: "<< Назад" }],
          [{ text: "Повернутися до вибору дій з категоріями" }],
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

module.exports = { edit_category_menu };
