const venom = require('venom-bot');
const { stages } = require('./stages');
const { db } = require('./db');

venom
  .create({ session: 'Bot Lud', logQR: true, multidevices: false })
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  client.onMessage((message) => {
    if (!message.isGroupMsg && message.from !== 'status@broadcast') {
      const resp = stages[getStage(message.sender.id)].exec.execute(
        message.sender.id,
        message.body,
        message.notifyName,
      );
      console.log(message);
      console.log(db);
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        client.sendText(message.sender.id, element);
      }
    }
  });
}

function getStage(user) {
  if (!db[user]) {
    db[user] = {
      stage: 0,
      itens: [],
    };
    return db[user].stage;
  }

  return db[user].stage;
}
