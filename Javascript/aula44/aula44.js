const nome = 'Andre';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Luis';  
  falaNome();
}
usaFalaNome();