// Filter -> Sempre retorna um array, com a mesma quantidade de elementos que o original ou menos
// Retorna os elementos que o callback retornar como true

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados);


// Retorne as 5 pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos 
// Retorne as pessoas cujo nome termina com a letra 'a'

const pessoas = [
    { nome: 'Vitor', idade: 21 },
    { nome: 'Aruana', idade: 22 },
    { nome: 'Eduardo', idade: 56 },
    { nome: 'Renata', idade: 46 },
    { nome: 'Cauã', idade: 60 },
    { nome: 'Sofia', idade: 59 }
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDe50);

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a') || obj.nome.toLowerCase().endsWith('ã'));
console.log(nomeTerminaComA);
