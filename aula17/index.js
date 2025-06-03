function soma (x = 1, y = 1){
    const resultado = x + y;
    return resultado;
}

console.log(soma(16, 17));

const raiz = n =>  Math.sqrt(n);    // A função raiz agora é uma arrow function

// const raiz = function (n) {
//     return Math.sqrt(n);
// };

console.log(raiz(25)); // A função raiz agora retorna o valor da raiz quadrada, então será exibido 5 no console.

// function saudacao(nome) {
//     return `Bom dia ${nome}!`;
// }

// const variavel = saudacao('Vitor');
// console.log(variavel); // A função saudacao agora retorna uma string, então variavel terá o valor "Bom dia Vitor!"