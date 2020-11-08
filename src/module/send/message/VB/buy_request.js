const axios = require("axios");

const buy_request = async (receiver, options, token) => {
  try {
  const {} = options;
  const data = JSON.stringify({
    receiver,
    min_api_version: 4,
    type: "text", 
    text:
      "Заявка на покупку залишена.\n\nЗ вами звяжуться щодо здійснення покупки.",
    keyboard: {
      DefaultHeight: false,
      InputFieldState: "hidden",
      BgColor: "#FFFFFF",
      Buttons: [
        {
          Columns: 3,
          Rows: 1,
          BgColor: "#7F7F7F",
          ActionType: "reply",
          ActionBody: "www.tut.by",
          Text: "<b>👈Повернутись назад</b>",
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

module.exports = { buy_request };
