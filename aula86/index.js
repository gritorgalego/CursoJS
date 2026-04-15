function rand(min, max) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("ERRO");
      return;
    }

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// Promise.all (executa todas) Promise.race (executa todas e mostra a primeira) Promise.resolve Promise.reject

const promises = [
  //   "Primeiro valor",
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 5000),
  esperaAi("Promise 3", 2000),
];

// function baixaPagina() {
//   const emCache = false;

//   if (emCache) {
//     return Promise.resolve("Página em Cache");
//   } else {
//     return esperaAi('Baixei a página', 3000);
//   }
// }

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Página em Cache");
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('ERRO -',e));

// Promise.race(promises)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function(erro){
//     console.log(erro);
// });

// Promise.all(promises)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function(erro){
//     console.log(erro);
// });
