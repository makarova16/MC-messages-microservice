const axios = require("axios");

const product_mark_menu_sale = async (receiver, options, token) => {
  try {
    const {} = options;
    const data = JSON.stringify({
      receiver,
      type: "rich_media",
      min_api_version: 4,
      rich_media: {
        Type: "rich_media",
        ButtonsGroupColumns: 5,
        ButtonsGroupRows: 2,
        BgColor: "#FFFFFF",
        Buttons: [
          {
            Columns: 5,
            Rows: 1,
            Text: "<font color=#323232><b>Оцініть товар</b></font>",
            ActionType: "open-url",
            ActionBody: "https://www.google.com",
            TextSize: "large",
            TextVAlign: "middle",
            TextHAlign: "middle",
          },
          {
            Columns: 1,
            Rows: 1,
            ActionBody: "",
            Image:
              "https://freepngimg.com/thumb/star/8-yellow-star-png-image-thumb.png",
          },
          {
            Columns: 1,
            Rows: 1,
            ActionBody:
              "https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png",
            Image:
              "https://assets.dryicons.com/uploads/icon/preview/12716/small_2x_48ad5091-fc94-4d3d-9598-62a5fbdf307a.png",
          },
          {
            Columns: 1,
            Rows: 1,
            ActionBody: "",
            Image:
              "https://assets.dryicons.com/uploads/icon/preview/12716/small_2x_48ad5091-fc94-4d3d-9598-62a5fbdf307a.png",
          },
          {
            Columns: 1,
            Rows: 1,
            ActionBody: "",
            Image:
              "https://assets.dryicons.com/uploads/icon/preview/12716/small_2x_48ad5091-fc94-4d3d-9598-62a5fbdf307a.png",
          },
          {
            Columns: 1,
            Rows: 1,
            ActionBody: "",
            Image:
              "https://assets.dryicons.com/uploads/icon/preview/12716/small_2x_48ad5091-fc94-4d3d-9598-62a5fbdf307a.png",
          },
        ],
      },
      keyboard: {
        DefaultHeight: false,
        BgColor: "#FFFFFF",
        InputFieldState: "hidden",
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

module.exports = { product_mark_menu_sale };
