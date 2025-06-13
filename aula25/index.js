// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'  -> Operador Ternário
const pontosUser = 1606;
const statsUser = pontosUser >= 1000 ? "Usuário VIP" : "Usuário normal";

const corUser = "Preto";
const corPadrao = corUser || "Rosa";


console.log(statsUser, corPadrao);

// if (pontosUser >= 1000) {
//   console.log("Usuário VIP");
// } else {
//   console.log("Usuário normal");
// }
