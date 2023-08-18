const stages = {
  0: {
    description: 'Boas vindas e cardapio',
    exec: require('./stages/0'),
  },

  1: {
    description: 'Compra dos itens',
    exec: require('./stages/1'),
  },
  2: {
    description: 'Resumo dos pedidos',
    exec: require('./stages/2'),
  },
  3: {
    description: 'Forma de pagamento',
    exec: require('./stages/3'),
  },
  4: {
    description: 'Endereço',
    exec: require('./stages/4'),
  },
  5: {
    description: 'Encerramento',
    exec: require('./stages/5'),
  },
};

exports.stages = stages;
