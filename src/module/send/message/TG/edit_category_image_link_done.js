const axios = require("axios");

const edit_category_image_link_done = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text: "Посилання на картинку категорії було змінено на: ХХХХХХ",
      reply_markup: {
        keyboard: [
          [{ text: "Повернутися до редагування ХХХХХ категорії" }],
          [{ text: "Повернутися до вибору категорій" }],
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

module.exports = { edit_category_image_link_done };
