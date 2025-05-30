let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
// num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

// num1 = ((num1 * 100 + num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100 + num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100 + num2 * 100)) / 100; // 1.0

// console.log(num1.toString() + num2);
//num1 = num1.toString();
// console.log(num1.toString(2)); // Converte para binário
// console.log(typeof num1);
// console.log(num1.toFixed(2)); // Converte para string com 2 casas decimais
// console.log(Number.isInteger(num1)); // Verifica se é um número inteiro
// console.log(Number.isNaN(num1)); // Verifica se é NaN (Not a Number)