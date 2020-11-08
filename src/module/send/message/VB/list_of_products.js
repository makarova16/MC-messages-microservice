const axios = require("axios");

const list_of_products = async (receiver, options, token) => {
  try {
    const {
      image1,
      text1,
      image2,
      text2,
      image3,
      text3,
      image4,
      text4,
      image5,
      text5,
      image6,
      text6,
    } = options;
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
            Image: `${image1}`,
          },
          {
            Columns: 6,
            Rows: 1,
            ActionType: "reply",
            ActionBody: "https://www.google.com",
            BgColor: "#2db9b9",
            Text: `<b>${text1}</b>`,
            TextSize: "large",
            TextVAlign: "middle",
            TextHAlign: "middle",
          },
          {
            Columns: 6,
            Rows: 6,
            ActionBody: "",
            Image: `${image2}`,
          },
          {
            Columns: 6,
            Rows: 1,
            ActionType: "reply",
            ActionBody: "https://www.google.com",
            BgColor: "#2db9b9",
            Text: `<b>${text2}</b>`,
            TextSize: "large",
            TextVAlign: "middle",
            TextHAlign: "middle",
          },
          {
            Columns: 6,
            Rows: 6,
            ActionBody: "",
            Image: `${image3}`,
          },
          {
            Columns: 6,
            Rows: 1,
            ActionType: "reply",
            ActionBody: "https://www.google.com",
            BgColor: "#2db9b9",
            Text: `<b>${text3}</b>`,
            TextSize: "large",
            TextVAlign: "middle",
            TextHAlign: "middle",
          },
          {
            Columns: 6,
            Rows: 6,
            ActionBody: "",
            Image: `${image4}`,
          },
          {
            Columns: 6,
            Rows: 1,
            ActionType: "reply",
            ActionBody: "https://www.google.com",
            BgColor: "#2db9b9",
            Text: `<b>${text4}</b>`,
            TextSize: "large",
            TextVAlign: "middle",
            TextHAlign: "middle",
          },
          {
            Columns: 6,
            Rows: 6,
            ActionBody: "",
            Image: `${image5}`,
          },
          {
            Columns: 6,
            Rows: 1,
            ActionType: "reply",
            ActionBody: "https://www.google.com",
            BgColor: "#2db9b9",
            Text: `<b>${text5}</b>`,
            TextSize: "large",
            TextVAlign: "middle",
            TextHAlign: "middle",
          },
          {
            Columns: 6,
            Rows: 6,
            ActionBody: "",
            Image: `${image6}`,
          },
          {
            Columns: 6,
            Rows: 1,
            ActionType: "reply",
            ActionBody: "https://www.google.com",
            BgColor: "#2db9b9",
            Text: `<b>${text6}</b>`,
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
            Columns: 6,
            Rows: 1,
            BgColor: "#2db9b9",
            ActionType: "reply",
            ActionBody: "www.tut.by",
            Text: "<b>Показати ще товари</b>",
            TextVAlign: "middle",
            TextHAlign: "center",
            TextOpacity: 100,
            TextSize: "large",
          },
          {
            Columns: 6,
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

module.exports = { list_of_products };
