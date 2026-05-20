// const nome = "Vitor";
// const sobrenome = "Galego";

// const falaNome = () => nome + ' ' + sobrenome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const nome = 'Vitor';
const sobrenome = 'Galego';

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.Pessoa = Pessoa;