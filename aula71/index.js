/* 
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptors(o, 'prop)
... (spread)

// Já vimos 
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Produto Genérico', preco: 25};

const garrafa = Object.assign({}, produto, {material: 'Vidro'}); // Cria uma cópia do objeto

garrafa.nome = 'Garrafa';
garrafa.preco = 35;

console.log(produto); // Produto Genérico
console.log(garrafa); // Garrafa
