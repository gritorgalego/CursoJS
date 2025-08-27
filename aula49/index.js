// Return -> Retorna um valor. Termina a função.

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + " " + resto;
//     }
//     return falaResto;
// }

// const fala = falaFrase('Olá,');
// const resto = fala('tudo bem?');
// console.log(resto);

function criaMultiplicador(multiplicador){
    return function (n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(5));
console.log(triplica(4));
console.log(quadruplica(2));
