const axios = require("axios");

const edit_product_image_done = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text: "Посилання на картинку товару було змінено.",
      reply_markup: {
        keyboard: [
          [{ text: "Повернутися до редагування ХХХХХ товару" }],
          [{ text: "Повернутися до вибору товару" }],
          [{ text: "Повернутися до вибору категорії" }],
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

module.exports = { edit_product_image_done };
