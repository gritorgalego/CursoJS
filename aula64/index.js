// Dobre os números

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosDobro = numeros.map(valor => valor * 2);

// console.log(numerosDobro);














// // Para cada elemento:
// // 1. Retorne apenas uma string com o nome da pessoa
// // 2. Remova apenas a chave "nome" do objeto
// // 3. Adicione uma chave id em cada objeto
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

// const nomes = pessoas.map(obj => obj.nome);
// console.log(nomes);

// const idades = pessoas.map(obj => ({idade : obj.idade}));
// console.log(idades);

const comIds = pessoas.map(function(obj, indice){
const newObject = { ...obj};
newObject.id = indice;
return newObject;
});
console.log(pessoas);
console.log(comIds);