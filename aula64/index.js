// Some todos os números (reduce)
// Retorne um array com o pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Soma
// const total = numeros.reduce(function(acumulador, valor, indice, array){
//     return acumulador + valor;
// }, 0);

//Pares (o mais correto seria usar filter)
// const total = numeros.reduce(function(acumulador, valor){
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);

// Dobro (o mais correto seria usar map)
const total = numeros.reduce(function(acumulador, valor){
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(total);

const pessoas = [
    { nome: 'Vitor', idade: 21 },
    { nome: 'Aruana', idade: 22 },
    { nome: 'Eduardo', idade: 56 },
    { nome: 'Renata', idade: 46 },
    { nome: 'Cauã', idade: 60 },
    { nome: 'Sofia', idade: 59 }
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);