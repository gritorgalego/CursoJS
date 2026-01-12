function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    get() {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (!this.cpfLimpo) return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  return cpfParcial + digito1 + digito2 === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  let total = 0;
  let regressivo = cpfParcial.length + 1;

  for (const num of cpfParcial) {
    total += regressivo * Number(num);
    regressivo--;
  }

  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
};

// ================== INTERAÇÃO ==================

const inputCpf = document.querySelector("#cpf");
const btnValidar = document.querySelector("#btnValidar");
const resultado = document.querySelector("#resultado");

btnValidar.addEventListener("click", () => {
  const cpf = new ValidaCPF(inputCpf.value);

  if (cpf.valida()) {
    resultado.textContent = "CPF válido ✅";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "CPF inválido ❌";
    resultado.style.color = "red";
  }
});
