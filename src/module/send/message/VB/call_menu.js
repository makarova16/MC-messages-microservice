const axios = require("axios");

const call_menu = async (receiver, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      receiver,
      min_api_version: 4,
      type: "text",
      text: "Вибери необхідну команду 👇",
      keyboard: {
        DefaultHeight: false, 
        InputFieldState: "hidden",
        BgColor: "#FFFFFF",
        Buttons: [
          {
            Columns: 6,
            Rows: 1,
            BgColor: "#2db9b9",
            ActionType: "reply",
            ActionBody: "www.tut.by",
            Text: "<b>Залишити запит на дзвінок</b>",
            TextVAlign: "middle",
            TextHAlign: "center",
            TextOpacity: 100,
            TextSize: "large",
          },
          {
            Columns: 6,
            Rows: 1,
            BgColor: "#2db9b9",
            ActionType: "open-url",
            ActionBody: "tel:+380632821043",
            Text: "<b>Подзвонити</b>",
            TextVAlign: "middle",
            TextHAlign: "center",
            TextOpacity: 100,
            TextSize: "large",
            Silent: true,
          },
          {
            Columns: 6,
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

module.exports = { call_menu };
