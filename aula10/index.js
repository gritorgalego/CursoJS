// OPERADORES ARITMÉTICOS //

/* 
- Adição/Concatenação -> +
- Subtração -> -
- Multiplicação -> *
- Divisão -> /
- Potenciação -> **
- Resto divisão -> %
*/

/* 
Parênteses () são usados para agrupar expressões matemáticas. 
Colchetes [] são para arrays.
Chaves {} para objetos ou blocos de código.
*/

// Contadores devem ser criados com LET

const num1 = 16;
const num2 = 6;
const num3 = 4;
const num4 = 17;
const num5 = 3;
const num6 = 31;

// console.log((num1 - num2) * [num3 + num4] - num5 + num6);

// let contador = 1;
// console.log(++contador); // ++contador mostraria o valor 2, contador++ mostraria o valor 1. ++contador -> incrementa o valor e mostra | contador++ -> mostra o valor e incrementa
// console.log(contador);

// const passo = 5;
// let contadorPasso = 5;

// contadorPasso *= passo;
// console.log(contadorPasso);
// contadorPasso *= passo;
// console.log(contadorPasso);
// contadorPasso *= passo;
// console.log(contadorPasso);
// contadorPasso *= passo;
// console.log(contadorPasso);

// NaN - Not a Number | Para resolver pode-se usar parseInt(), parseFloat() ou Number()
// const num7 = 10;
// const num8 = parseInt('5');
// console.log(num7 + num8);

/*
==========================
EXERCÍCIO SUGERIDO (COPILOT)

Crie um programa que simule um contador de passos de uma pessoa:

1. Crie uma variável chamada `passo` e defina o valor como 2.
2. Crie uma variável chamada `contador` e defina o valor inicial como 0.
3. Some o valor de `passo` ao `contador` cinco vezes, utilizando operadores de atribuição.
4. Mostre o valor do contador a cada soma no console.
5. Ao final, mostre uma mensagem dizendo quantos passos foram dados.

Dica: Não utilize loops ainda, apenas operadores de atribuição e console.log.

==========================

RESOLUÇÃO:
*/

const passo = 2;
let contador = 0;
contador += passo; // contador = contador + passo;
contador += passo;
contador += passo;
contador += passo;
contador += passo;
console.log(`Parabéns! Você deu ${contador} passos.`);