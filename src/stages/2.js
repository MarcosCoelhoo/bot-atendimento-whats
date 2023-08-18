const { db } = require('../db');

function execute(user, msg, nameContact) {
  if (msg === '*') {
    db[user].itens = [];
    db[user].stage = 0;
    return ['*PEDIDO CANCELADO, VOLTE SEMPRE*'];
  }

  if (msg === '#') {
    db[user].stage = 3;
    return [
      `*CERTO ${nameContact.toUpperCase()}, QUAL SERÁ A FORMA DE PAGAMENTO?*

*1 - PIX*
*2 - DINHEIRO EM ESPÉCIE*`,
    ];
  }

  const items = db[user].itens
    .map((item) => item.description)
    .join(', ')
    .toUpperCase();

  const total = db[user].itens
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  console.log('Parte 2');

  return [
    `*RESUMO DO PEDIDO ✅*

*🛒 PRODUTOS:* ${items}

*💰 TOTAL:* R$ ${total}

-----------------------------------------

*DIGITE #️⃣ PARA CONTINUAR OU *️⃣ PARA CANCELAR*`,
  ];
}

exports.execute = execute;
