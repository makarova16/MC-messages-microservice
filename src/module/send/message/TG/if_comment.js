const axios = require("axios");

const if_comment = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text: "Введіть текст що повинна прокоментувати клієнт",
      reply_markup: {
        keyboard: [[{ text: "Скасувати" }]],
        resize_keyboard: true,
      },
    });

    const response = await axios(config);

    return { requestConfig: config, responseData: response.data };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { if_comment };
