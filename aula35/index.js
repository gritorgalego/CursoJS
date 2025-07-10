// For padrão -> Geralmente usado para iterar sobre arrays ou objetos
// For in -> Retorna o índice ou chave (string, arrays ou objetos)
// For of -> Retorna o valor (iteráveis, arrays ou strings)

const nomes = ["Brian", "Stewie", "Peter"];

// for (let i = 0; i < nomes.length; i++){
//     console.log(nomes[i]);
// }

// for (let i in nomes){
//     console.log(nomes[i]);
// }

// for (let valor of nomes){
//     console.log(valor);
// }

nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});
