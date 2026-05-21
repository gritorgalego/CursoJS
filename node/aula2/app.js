// console.log(__filename); || Caminho absoluto arquivo atual
// console.log(__dirname);  || Caminho absoluto pasta atual
// const path = require('path');
// console.log(path.resolve(__dirname, '..', '..', '..', '..','Teste'));

const gato = require("./Z/mod2");

const g1 = new gato("Almofada");
g1.miar();
