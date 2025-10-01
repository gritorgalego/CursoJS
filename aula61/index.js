//                0        1       2         3 
const nomes = ['Dexter', 'Deb', 'Doakes', 'Angél'];

// nomes.splice(índice atual, delete, elem1, elem2, elem3);

// Pop
// const removidos = nomes.splice(-2, Number.MAX_VALUE); // remove a partir do índice -2, todos os elementos

// Shift
//const removidos = nomes.splice(0, 1); // remove a partir do índice 0, 1 elemento

// Unshift
// nomes.splice(0, 0, 'Rita'); // a partir do índice 0, remove 0 elementos e adiciona 'Rita'

// Push
// nomes.splice(nomes.length, 0, 'Rita'); // a partir do índice nomes.length, remove 0 elementos e adiciona 'Rita'

console.log(nomes);
const removidos = nomes.splice(1, 1, 'Rita');
console.log(nomes, removidos);
