// If pode ser usado sozinho, já o else depende de um if para ser usado | É possível ter vários else if, mas apenas um else

// const hora = 18;

// if (hora >= 0 && hora <= 12) {
//     console.log("Bom dia!");
// }
// else if (hora >= 12 && hora <= 18) {
//     console.log("Boa tarde!");
// }
// else if (hora > 18 && hora <= 23) {
//     console.log("Boa noite!");
// }
// else {
//     console.log("Olá! Insira uma hora válida!");
// }

// const tenhoGrana = false;

// if (tenhoGrana) {
//   console.log("Tenho grana, vou ao cinema!");
// } else {
//   console.log("Não tenho grana, não vou ao cinema!");
// }
if (numero >= 0 && numero <= 5) {
  console.log("O número está entre 0 e 5");
} else if (numero > 5 && numero <= 10) {
  console.log("O número está entre 6 e 10");
} else if (numero > 10 && numero <= 15) {
  console.log("O número está entre 11 e 15");
} else if (numero > 15 && numero <= 20) {
  console.log("O número está entre 16 e 20");
} else {
  console.log("O número está fora do intervalo de 0 a 20");
}
