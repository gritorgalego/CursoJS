import Pessoa, {nome, sobrenome, idade, soma} from './modulo1.js';

const pessoa1 = new Pessoa("Vitor", "Galego", 21);
console.log(pessoa1);
console.log("Soma: " + soma(1000, 606));

const pessoa2 = new Pessoa(nome, sobrenome, idade);
console.log(pessoa2);
console.log("Soma: " + soma(33,34));