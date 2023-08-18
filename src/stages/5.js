const { db } = require('../db');

function execute(user, msg, nameContact) {
  console.log('parte 5');
  db[user].stage = 0;
  db[user].itens = [];
  return [
    `*PEDIDO FEITO, ${nameContact.toUpperCase()} ✅*

LOGO MENOS SEU PEDIDO ESTARÁ NO SEU ENDEREÇO

MAIS INFORMAÇÕES: 91 9999-9999`,
  ];
}

exports.execute = execute;
