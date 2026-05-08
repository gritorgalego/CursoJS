export {nome, sobrenome, idade, soma, Pessoa as default};

const nome = 'Zeca';
const sobrenome = 'Tatu';
const idade = 33;

function soma (x, y){
    return x + y;
}
class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}

