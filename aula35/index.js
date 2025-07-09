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
