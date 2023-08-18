const { db } = require('../db');
const { menu } = require('../menu');

function execute(user, msg) {
  if (msg === '*') {
    db[user].itens = [];
    db[user].stage = 0;
    return ['*PEDIDO CANCELADO, VOLTE SEMPRE*'];
  }

  if (msg === '#') {
    db[user].stage = 2;
    return [
      `*PEDIDO CONFIRMADO✅*

-----------------------------------------

MANDE UM "OK" PARA RECEBER O RESUMO DO SEU PEDIDO
`,
    ];
  }

  if (!menu[msg]) {
    return [`*CÓDIGO INVÁLIDO, DIGITE NOVAMENTE ❌*`];
  }

  db[user].itens.push(menu[msg]);

  console.log('Parte 1');

  return [
    `*${menu[msg].description.toUpperCase()}* ADICIONADA COM SUCESSO

ADICIONE OUTRO ITEM DIGITANDO O CÓDIGO

-----------------------------------------

*DIGITE #️⃣ PARA CONTINUAR OU *️⃣ PARA CANCELAR*`,
  ];
}

exports.execute = execute;
