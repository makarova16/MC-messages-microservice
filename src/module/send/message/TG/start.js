const axios = require("axios");

const start = async (chat_id, options, token) => {
  try {

    const {} = options;
    const data = JSON.stringify({
      chat_id,
      text:
        "Привіт, я твій помічник. Щоб розпочати роботу поділіться номером телефону.",
      phone_number: "",
      reply_markup: {
        keyboard: [
          [{ text: "Поділитися", request_contact: true, callback_data: "" }],
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
      data: data
    };

    const response = await axios(config);

    return { requestConfig: config, responseData: response.data };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { start };
