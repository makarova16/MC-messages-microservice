if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

console.log(`Stage is ${process.env.NODE_ENV}`);

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/models');
const app = express();
const { send } = require('./module');
const botSender = 'bot';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/message', async function (req, res) {
  const { body } = req;
  const { userExternalId, options, token, templateName, channelId, user_connection_id } = body;
  const sendResult = await send.message[channelId][templateName](userExternalId, options, token);
  console.log(req.body);
  const messageHistory = await db.messages.create({sender: botSender, user_connection_id, message: sendResult});
  res.send(messageHistory);
});

app.post('/message/history', async function (req, res) {
  console.log(req);
  const messageHistory = await db.messages.create(req.body);
  res.send(messageHistory);
});

app.get('/message/history', async function (req, res) {
  const getMessageHistory = await db.messages.findAll(req.query);
  res.send(getMessageHistory);
});

app.delete('/message/history/:id', async function (req, res) {
  const { id } = req.params;
  const delMessageHistory = await db.messages.destroy( { where: {id: id }} );
  res.sendStatus(200);
});

app.post('/', async function (req, res) {
  console.log(req.body);
  res.status(200).end();
});

app.post('/hook', async function (req, res) {
  console.log(req.body);
  res.status(200).end();
});

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});

