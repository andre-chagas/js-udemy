// IIFE - Immediately Invoked Function Expression
(function(idade, peso, altura) {
  
  const sobrenome = 'Chagas';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Andre'));
  }

  falaNome();
  console.log(idade, peso, altura);

})(36, 80, 1.80);


