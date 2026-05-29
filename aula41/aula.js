// Declaração de função (Function hoisting)

falaOi();
function falaOi() {
    console.log('Oi');
}

// First-class objects (Objetos de primeira classe)
// Function expression (Expressão de função)
const souUmDado = function() {
    console.log('Sou um dado');
}
souUmDado();

// Arrow function (Função de seta)
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando');
    }
};
obj.falar();

