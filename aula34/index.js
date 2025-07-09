// For in -> Lê os índices ou chaves de um array ou objeto

const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Galego',
    idade: 21
};

// for (let i = 0; i < frutas.length; i++){
//  console.log(frutas[i]);
// }

for (let key in pessoa){
    console.log(key, pessoa[key]);
}

// console.log(pessoa['nome'], pessoa['sobrenome']);