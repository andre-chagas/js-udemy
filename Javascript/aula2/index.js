/*
André Luis França Chagas tem 30 anos, pesa 74kg
tem 1.80 de altura e seu IMC é de 25.848484848444
André Chagas nasceu em 1980
*/

const nome = 'André Chagas';
const sobrenome = 'França';
const idade = 30;
const peso = 74;
const alturaemM = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaemM * alturaemM);
anoNascimento = 2024 - idade;

// template strings

console.log(`${nome} ${sobrenome}  tem  ${idade}  anos pesa ${peso} kg`);
console.log(`tem ${alturaemM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);