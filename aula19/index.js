/*
Primitivos (imutáveis) - string, number, boolean, undefined, null, (symbol, bigint)

Referência (mutáveis) - array, object, function

*/

let a = [1 , 2, 3];
let b = a; // b é uma referência ao mesmo array que a
console.log(a, b);
a.push(4); // Modifica o array original
console.log(a, b); // Ambos refletem a mudança

b.pop(); // Remove o último elemento do array
console.log(a, b); // Ambos refletem a mudança
// a e b estão apontando para o mesmo local na memória
let c = b; // c também é uma referência ao mesmo array
console.log(a === b); // true, pois ambos apontam para o mesmo array
console.log(a === c); // true, pois todos apontam para o mesmo array
// Se atribuirmos um novo array a b, b deixará de apontar para o mesmo local que a
// exemplo -> b = [10, 20, 30]; // b agora aponta para um novo array

const teste1= {
    nome: 'Vitor',
    sobrenome: 'Galego'
};

const teste2 = {...teste1}; // teste2 é uma cópia superficial de teste1, ou seja, é independente de teste1 e não aponta
// para o mesmo local na memória
teste2.nome = 'Antônio'; // Modifica apenas teste2
// teste1 permanece inalterado
console.log(teste1, teste2);