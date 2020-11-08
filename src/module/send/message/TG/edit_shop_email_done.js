const axios = require("axios");

const edit_shop_email_done = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text: "Електронну пошту магазину було змінено на: ХХХХХХ",
      reply_markup: {
        keyboard: [
          [
            {
              text:
                "Повернутися до редагування контактної інформації про магазин",
            },
          ],
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

module.exports = { edit_shop_email_done };
