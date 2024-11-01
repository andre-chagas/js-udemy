// String, number, undefined, null, boolean
const nome = 'André'; // string
const nome1 = "André"; // string
const nome2 = `André`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta para local nenhuma na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhuma na memória
const aprovado = false; // Boolean = true, false (lógico)


let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2
