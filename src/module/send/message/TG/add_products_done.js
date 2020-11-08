const axios = require("axios");

const add_products_done = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text: "Товари додано із Google Sheets",
      reply_markup: {
        keyboard: [
          [{ text: "<< Назад" }],
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

module.exports = { add_products_done };
