const axios = require("axios");

const if_menu = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text: "Використовуй клавіатуру нижче, щоб вибрати необхідну команду 👇",
      reply_markup: {
        keyboard: [
          [
            {
              text:
                "Відправити повідомлення за номерами користувачам з очікуванням текстової відповіді",
            },
          ],
          [
            {
              text:
                "Відправити повідомлення всім користувачам з очікуванням текстової відповіді",
            },
          ],
          [{ text: "<< Назад" }],
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

module.exports = { if_menu };
