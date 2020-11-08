const axios = require("axios");

const new_product_choose_categories = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text: "Виберіть категорію зі списку, до яких входитиме даний товар",
      reply_markup: {
        keyboard: [
          [{ text: "Категорія 1 ✅" }],
          [{ text: "Категорія 2 ✅" }],
          [{ text: "Категорія 3" }],
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

module.exports = { new_product_choose_categories };
