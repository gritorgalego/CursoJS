/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo:
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras criações.

Todos os objetos tem uma referência interna para um protótipo (__proto__), que vem da propriedade prototype da função construtora que foi usada para criá-lo.
Quando tentamos acessar um membro do objeto, primeiro o motor do JS vai tentar encontrar esse membro no próprio objeto e depois a cadeia de protótipos
é usada até o topo (null) até encontrar (ou não) tal membro.
*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

Date.prototype.formatData = function(){
    return this.getDate() + '/' + (this.getMonth() + 1) + '/' + this.getFullYear() + ' ' + '<-- Data formatada pelo protótipo do Date';
}
const pessoa1 = new Pessoa('Vitor', 'Galego'); // <-- Pessoa é uma função construtora
const pessoa2 = new Pessoa('James', 'Bond'); // <-- Pessoa é uma função construtora
const data = new Date(); // <-- Date é uma função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data.formatData());
