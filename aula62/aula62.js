// defineProperty -defineProperties
function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    value: estoque,
    writable: true,
    configurable: true
  });

  Object.defineProperties(this, {
    nome: {
    enumerable: true,  // mostra a chave
    value: nome,   // valor
    writable: true,  // pode alterar o valor
    configurable: true // configurável
    },
    preco:{
    enumerable: true,  
    configurable: true
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1) {
  console.log(chave);
}