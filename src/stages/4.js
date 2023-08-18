const { db } = require('../db');

function execute(user, msg, nameContact) {
  // db[user].stage = 0;

  console.log('parte 4');

  const items = db[user].itens
    .map((item) => item.description)
    .join(', ')
    .toUpperCase();

  const total = db[user].itens
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  db[user].stage = 5;

  return [
    `*🔔NOVO PEDIDO🔔*

*🙎🏻‍♂️ CLIENTE:* ${nameContact.toUpperCase()}

*🛒 PRODUTOS:* ${items}

*💰 TOTAL:* R$ ${total}

-----------------------------------------

*AGORA RESPONDA COM SEU ENDEREÇO 🏠*`,
  ];
}

exports.execute = execute;
