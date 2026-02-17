const pessoas = [
    {id: 2, nome: 'Du'},
    {id: 3, nome: 'Dudu'},
    {id: 1, nome: 'Edu'}
];

// const novasPessoas = {};
// for (const pessoa of pessoas){
//     const { id } = pessoa;
//     novasPessoas[id] = pessoa;
// }

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

for (const pessoa of novasPessoas.values()){
    console.log(pessoa);
}