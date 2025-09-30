// Valor por referência
//                   0         1
// const nomes = ['Vitor', 'Aruana'];
// String, Objetos, Funções, Numéros

// const nomes = new Array('Vitor', 'Aruana', 'Áster', 'Aurie', 'Aria');
// nomes.push('Aurie'); // Adiciona no final do array
// console.log(nomes);
// nomes.unshift('Aurie'); // Adiciona no começo do array e altera os índices
// console.log(nomes);
// const novo = [...nomes]; 
// Agora o que for feito em novo não afetará o array nomes
// const removido = novo.pop();
// const removido = novo.shift(); // Remove o primeiro elemento e altera os índices
// const nomesSlice = nomes.slice(0, -1); // Novo array a partir do índice 0 até o -1 (último elemento não incluso)
// console.log(nomes);
// console.log(novo, removido, 'Foi/Foram removido(s) do array');
// console.log(nomesSlice);
// console.log(nomes.length);

// Convertendo string em array
// const nome = 'Vitor Avila Galego';
// const nomes = nome.split(' '); // Divide a string em array a partir do espaço

const nomes = ['Vitor', 'Avila', 'Galego'];
const nome = nomes.join(' '); // Une os elementos do array em uma string, separados por espaço
console.log(nome);
