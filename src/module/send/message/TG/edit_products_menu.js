const axios = require("axios");

const edit_products_menu = async (chat_id, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      chat_id,
      photo:
        "https://img.tennis-warehouse.com/watermark/rs.php?path=LILCRPW-WH-1.jpg&nw=600",
      caption: "Плаття",
      reply_markup: {
        keyboard: [
          [{ text: "Наступний товар" }],
          [{ text: "Попередній товар" }],
          [{ text: "Обрати даний товар для редагування" }],
          [{ text: "<< Назад" }],
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

module.exports = { edit_products_menu };
