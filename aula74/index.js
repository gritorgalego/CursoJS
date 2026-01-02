// Produtos -> Aumento, Desconto
// Caneca = Material, Camiseta = Cor

function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}


Produto.prototype.aumento = function (quantia){
    this.preco += quantia;
}

Produto.prototype.desconto = function (quantia){
    this.preco -= quantia;
}

function Camiseta (nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca (nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque; 
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number')return;
            estoque = valor;
              }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

const produto = new Produto('Manga Longa',29.90);
const camiseta = new Camiseta('Regata', 19.90, 'Preta');
const caneca = new Caneca('Caneca Anime', 13.90, 'Plástico', 10);

console.log(caneca);
console.log(camiseta);
console.log(produto);