// Global
function retornaFuncao(nome) {
  const nome = 'Andre';
  return function() {
    return nome;
  };
}

const funcao = retornaFuncao('Andre');
const funcao2 = retornaFuncao('Joao');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());