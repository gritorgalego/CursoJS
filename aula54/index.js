// Factory Functions

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter
    set nomeCompleto(valor){
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      console.log(valor);
    },
    altura,
    peso,
    apresentacao() {
      return `- Olá, meu nome é ${this.nomeCompleto}.\n- Eu peso ${this.peso}kg e tenho ${this.altura}m.`;
    },
    fala(assunto) {
      return `- ${this.nome} está falando sobre ${assunto}.`;
    },
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return `- O IMC de ${this.nome} é ${indice.toFixed(2)}\n`;
    },
  };
}

const p1 = criaPessoa("Vitor", "Galego", 1.92, 94);
p1.nomeCompleto = "Testando o setter";
console.log(p1.nomeCompleto);