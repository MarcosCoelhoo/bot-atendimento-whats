const { db } = require('../db');
const { stages } = require('../stages');
let paymentType = '';

function execute(user, msg, nameContact) {
  console.log('Parte 3');

  if (msg === '1') {
    db[user].stage = 4;

    return [
      `*🔑 CHAVE PIX:* 000.000.000-00

*📃 NOME:* MARCOS VINICIUS COELHO MAIA

-----------------------------------------

*DIGITE "OK" PARA PROSSEGUIR COM O PEDIDO*`,
    ];
  }

  if (msg === '2') {
    db[user].stage = 4;
    return [
      `*OK ${nameContact.toUpperCase()}, DIGITE O VALOR EM DINHEIRO PARA LEVARMOS O TROCO*`,
    ];
  }
}

exports.execute = execute;
