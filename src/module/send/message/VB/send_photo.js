const axios = require("axios");

const send_photo = async (receiver, options, token) => {
  try {
    const { image, text } = options;
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
            ActionType: "none",
            ActionBody: "https://www.google.com",
            BgColor: "#C0C0C0",
            Text: `<b>${text}</b>`,
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
            Text: "<b>Загальна інформація про магазин</b>",
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
            Text: "<b>Товари</b>",
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
            Text: "<b>Контактна інформація</b>",
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
            Text: "<b>Дзвінок</b>",
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
            Text: "<b>Залишити відгук</b>",
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
            Text: "<b>Запросити друга</b>",
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

module.exports = { send_photo };
