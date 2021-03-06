const axios = require("axios");

const edit_product_image = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text: "Введіть нове посилання на картинку товару",
      reply_markup: {
        keyboard: [[{ text: "Скасувати" }]],
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

module.exports = { edit_product_image };
