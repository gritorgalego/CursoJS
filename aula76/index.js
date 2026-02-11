// Superclass

function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(
      `O Valor de R$${valor.toFixed(2)} não está disponível para saque!\n\nSeu saldo atual é de -> R$${this.saldo.toFixed(2)}\n`,
    );
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  console.log(
    `Seu saldo era de R$${(this.saldo - valor).toFixed(2)} e agora é de R$${this.saldo.toFixed(2)}\n`,
  );
};
Conta.prototype.verSaldo = function () {
  console.log(
    `Agência: ${this.agencia} | Conta: ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}\n`,
  );
};

ContaCorrente.prototype.sacar = function (valor) {
  if ((this.saldo + this.limite) < valor) {
    console.log(
      `O Valor de R$${valor.toFixed(2)} não está disponível para saque!\n\nSeu saldo atual é de -> R$${this.saldo.toFixed(2)} e seu limite é de R$${this.limite.toFixed(2)}\n`,
    );
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

const conta1 = new Conta(16, 6, 1606);
const conta2 = new ContaCorrente(10, 20, 0, 1000);

// conta1.depositar(44);
// conta1.sacar(2000);
// conta1.sacar(650);
// conta1.verSaldo();

// conta2.depositar(100);
// conta2.sacar(500);
// conta2.sacar(600);
// conta2.sacar(0.01);

const conta3 = new ContaPoupanca(11, 22, 1000);
conta3.depositar(500);
conta3.sacar(200);
conta3.sacar(1500);
conta3.sacar(300);