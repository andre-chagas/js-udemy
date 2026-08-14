class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const nome = 'André';
const sobrenome = 'Luis';

exports.nome = nome;
module.exports.sobrenome = sobrenome;
exports.outraCoisa = 'Outra coisa';