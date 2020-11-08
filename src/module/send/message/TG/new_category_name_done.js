const axios = require("axios");

const new_category_name_done = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text: "Нова категорія успішно створена з назвою: ХХХХХХ",
      reply_markup: {
        keyboard: [
          [{ text: "Повернутися до дій з категоріями товарів" }],
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

module.exports = { new_category_name_done };
