// arguments sustenta todos os valores passados para a função
// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments){
//         total += argumento;
//     }
//     console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function funcao({ valor1, valor2, valor3 }) {
//   console.log(valor1, valor2, valor3);
// }

// let obj = { valor1: 'Vitor', valor2: 'Avila', valor3: 'Galego' };
// funcao(obj);

const conta = function conta(operador, acumulador, ...numeros){ // rest operator (...) precisa sempre ser o último parâmetro da função
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};
conta('+', 100, 10, 20, 30, 40, 50);