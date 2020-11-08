const axios = require("axios");

const contact_information = async (receiver, options, token) => {
  try {
    const { phone, mail } = options;
    const data = JSON.stringify({
      receiver,
      min_api_version: 4,
      type: "text",
      text: `Ми радо вам допоможемо та відповімо на ваші запитання.\n\nТелефонуйте ${phone} або надішліть нам запитання на електронну пошту ${mail}`,
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
            Text: "<b>Запросити друга</b>",
            TextVAlign: "middle",
            TextHAlign: "center",
            TextOpacity: 100,
            TextSize: "large",
            ActionType: "open-url",
            ActionBody:
              "viber://forward?text=%D0%94%D0%BE%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D1%81%D1%8F%20%D0%B4%D0%BE%20%D0%B1%D0%BE%D1%82%D0%B0%20%D0%9A%D0%BE%D0%B2%D0%B1%D0%B0%D1%81%D0%BD%D0%B8%D1%85%20%D0%BA%D1%80%D0%B0%D0%BC%D0%BD%D0%B8%D1%86%D1%8C%20%C2%AB%D0%AE%D0%B2%D1%96%D0%BB%D0%B5%D0%B9%D0%BD%D0%B8%D0%B9%C2%BB.%20%D0%86%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D1%96%D1%8F%20%D0%BF%D1%80%D0%BE%20%D0%B0%D0%BA%D1%86%D1%96%D1%97%2C%20%D0%B1%D0%BE%D0%BD%D1%83%D1%81%D0%B8%20%D1%82%D0%B0%20%D0%B1%D0%B0%D0%B3%D0%B0%D1%82%D0%BE%20%D1%86%D1%96%D0%BA%D0%B0%D0%B2%D0%BE%D0%B3%D0%BE!%20%D0%AF%20%D0%B2%D0%B6%D0%B5%20%D1%82%D1%83%D1%82!%20viber%3A%2F%2Fpa%3FchatURI%3Dyuvileynyy-bot-dev",
            Silent: true,
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

module.exports = { contact_information };
