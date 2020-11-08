const axios = require("axios");

const poll_menu_menu = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({"chat_id":"390308480","text":"Виберіть варіант опитування, який ви хочете надіслати","reply_markup":{"keyboard":[[{"text":"Звичайне текстове опитування, з очікуванням текстової відповіді"}],[{"text":"Текстове опитування + фото, з очікуванням текстової відповіді"}]],"resize_keyboard":true}});
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

module.exports = { poll_menu_menu };
