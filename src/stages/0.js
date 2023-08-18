const { menu } = require('../menu');
const { db } = require('../db');

function execute(user, msg, nameContact) {
  let menuFormated = '';

  Object.keys(menu).forEach((keyItem) => {
    menuFormated += `${keyItem} - ${menu[keyItem].description} - R$ ${menu[
      keyItem
    ].price.toFixed(2)}\n`;
  });

  const txtMenu = `*--- CARDÁPIO ---*

${menuFormated}
*DIGITE O NUMERO DO ITEM PARA ADICIONAR NA SUA LISTA DE PEDIDOS*.
  `;

  db[user].stage = 1;

  console.log('Parte 0');
  return [
    `OLÁ ${nameContact.toUpperCase()}, TUDO BEM? ME CHAMO LUD E VOU LHE MANDAR O CARDÁPIO`,
    txtMenu,
  ];
}

exports.execute = execute;
