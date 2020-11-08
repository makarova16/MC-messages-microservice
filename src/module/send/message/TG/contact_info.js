const axios = require("axios");

const contact_info = async (chat_id, options, token) => {
  try {
    const { phone, mail } = options;
    const data = JSON.stringify({
      chat_id,
      text:
        `Контактна інформація:\n\nНомер телефону: ${phone}\nЕлектронна пошта: ${mail}`,
      reply_markup: {
        keyboard: [
          [{ text: "Змінити номер телефону магазину" }],
          [{ text: "Змінити електронну пошту магазину" }],
          [{ text: "<<Назад" }],
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

module.exports = { contact_info };
