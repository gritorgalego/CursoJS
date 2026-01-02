// // new Object -> Object.prototype
// const objA = {
//     chaveA: 'Esta é a chave do objA'
//     // __proto__: Object.prototype
// };

// const objB = {
//     chaveB: 'Esta é a chave do objB'
//     // __proto__: Object.prototype
// };

// const objC = new Object();
// objC.chaveC = 'Esta é a chave do objC';

// Object.setPrototypeOf(objB, objA); // Define objA como protótipo de objB
// Object.setPrototypeOf(objC, objB); // Define objB como protótipo de objC

// console.dir(objC); // Exibe o objeto objC no console

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Action Figure", 250);

const p2 = {
  nome: "Caneca",
  preco: 30,
};

const p3 = Object.create(Produto.prototype, {
  nome: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "Copo Stanley",
  },
  preco: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 100,
  },
});

p3.desconto(20);

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(15);

console.dir(p1);
console.dir(p2);
console.dir(p3);
