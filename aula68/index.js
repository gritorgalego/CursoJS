// const pessoa = {
//     nome: 'Vitor',
//     sobrenome: 'Galego',
// };

// const chave = 'nome';

// console.log(pessoa[chave]); // Acessando a propriedade 'nome' dinamicamente

// const pessoa1 = new Object();
// pessoa1.nome = 'Vitor';
// pessoa1.sobrenome = 'Galego';
// pessoa1.idade = 21;

// pessoa1.falaNome = function() 
// {
//     return(`${this.nome} está falando o seu nome.`);
// };

// pessoa1.getDataNascimento = function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// console.log(pessoa1.falaNome());
// console.log(pessoa1.getDataNascimento());

// function criaPessoa(nome, sobrenome){
//     return{
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Vitor', 'Galego');
// console.log(p1.nomeCompleto);

// Factory functions / Constructor functions / Classes

function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Vitor', 'Galego');
console.log(p1);