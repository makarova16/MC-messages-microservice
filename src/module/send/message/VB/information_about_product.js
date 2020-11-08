const axios = require("axios");

const information_about_product = async (receiver, options, token) => {
  try {
    const { image, name, category, description, price } = options;
    const data = JSON.stringify({
      receiver,
      type: "rich_media",
      min_api_version: 7,
      rich_media: {
        Type: "rich_media",
        ButtonsGroupColumns: 6,
        ButtonsGroupRows: 7,
        BgColor: "#FFFFFF",
        Buttons: [
          {
            Columns: 6,
            Rows: 6,
            ActionBody: "",
            Image: `${image}`,
          },
          {
            Columns: 6,
            Rows: 1,
            ActionType: "reply",
            ActionBody: "https://www.google.com",
            BgColor: "#2db9b9",
            Text: `<b>👉Інформація про товар:</b> \nНазва: ${name} \nКатегорія: ${category}\nОпис: ${description}\nЦіна: ${price}`,
            TextSize: "large",
            TextVAlign: "middle",
            TextHAlign: "middle",
          },
        ],
      },
      keyboard: {
        DefaultHeight: false,
        InputFieldState: "hidden",
        BgColor: "#FFFFFF",
        Buttons: [
          {
            Columns: 3,
            Rows: 1,
            BgColor: "#2db9b9",
            ActionType: "reply",
            ActionBody: "www.tut.by",
            Text: "<b>Залишити заявку на покупку</b>",
            TextVAlign: "middle",
            TextHAlign: "center",
            TextOpacity: 100,
            TextSize: "large",
          },
          {
            Columns: 3,
            Rows: 1,
            BgColor: "#2db9b9",
            ActionType: "reply",
            ActionBody: "www.tut.by",
            Text: "<b>Оцінити товар</b>",
            TextVAlign: "middle",
            TextHAlign: "center",
            TextOpacity: 100,
            TextSize: "large",
          },
          {
            Columns: 3,
            Rows: 1,
            BgColor: "#7F7F7F",
            ActionType: "reply",
            ActionBody: "www.tut.by",
            Text: "<b>👈До переліку товарів</b>",
            TextVAlign: "middle",
            TextHAlign: "center",
            TextOpacity: 100,
            TextSize: "large",
          },
          {
            Columns: 3,
            Rows: 1,
            BgColor: "#7F7F7F",
            ActionType: "reply",
            ActionBody: "www.tut.by",
            Text: "<b>🗃До головного меню</b>",
            TextVAlign: "middle",
            TextHAlign: "center",
            TextOpacity: 100,
            TextSize: "large",
          },
        ],
      },
    });

    const config = {
      method: "post",
      url: "https://chatapi.viber.com/pa/send_message",
      headers: {
        "X-Viber-Auth-Token": token,
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

module.exports = { information_about_product };
