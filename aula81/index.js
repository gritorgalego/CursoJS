class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      console.log(this.nome + " já está ligado");
      return;
    }
    this.ligado = true;
  }
  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " já está desligado");
      return;
    }
    this.ligado = false;
  }
}

const d1 = new DispositivoEletronico("Smartphone");
d1.ligar();
d1.ligar();
console.log(d1);

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone("Samsung", "Preto", "Galaxy S20 FE");
s1.ligar();
console.log(s1);

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar(){
    console.log("Você usou o método ligar da classe Tablet e não da classe DispositivoEletronico");
  }
  falaOi(){
    console.log("Oi, eu sou um tablet e esse método é exclusivo da minha classe");
  }
}

const t1 = new Tablet("Ipad", true);
t1.ligar();
console.log(t1);
