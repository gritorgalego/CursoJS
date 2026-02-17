const falar = {
  falar() {
    return `${this.nome} está falando.`;
  },
};

const comer = {
  comer() {
    return `${this.nome} está comendo.`;
  },
};

const beber = {
  beber() {
    return `${this.nome} está bebendo.`;
  },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}
const p1 = criaPessoa("Vitor", "Galego");
const p2 = criaPessoa("Gon", "Freecss");
console.log(p1.falar());
console.log(p2.beber());
