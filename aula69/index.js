// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, // mostra a chave
    //     value: estoque, // valor
    //     writable: true, // pode ser alterado
    //     configurable: false // não configurável
    // })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: false
        }
    })
}

const p1 = new Produto('Camiseta', 120, 20);
console.log(Object.keys(p1));

