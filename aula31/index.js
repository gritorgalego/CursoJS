const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Galego',
    idade: 21,
    endereco: {
        rua: 'Rua da Saudade',
        numero: 99
    }
};
//Atribuição via desestruturação (mostrando 3 formas de atribuição)
//        1       2                     3
// const { nome, sobrenome = '', idade: suaIdade = '' } = pessoa;
// console.log(nome);
// console.log(sobrenome);
// console.log(suaIdade);

const {endereco: {rua, numero}, ...resto} = pessoa;
console.log(rua);
console.log(numero);
console.log(resto);