const axios = require("axios");

const notifications_turn_on_off = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text: "Увімкнути/Вимкнути cповіщення",
      reply_markup: {
        keyboard: [[{ text: "Повернутися до головного меню" }]],
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

module.exports = { notifications_turn_on_off };
