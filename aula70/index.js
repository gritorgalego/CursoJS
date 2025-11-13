function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false, // não configurável
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Valor inválido');
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 120, 20);
// console.log(p1.estoque);
p1.estoque = 'Testando erro';
console.log(p1.estoque);