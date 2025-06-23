// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];
// [a, b, c] = letras;
// console.log(a, b, c);


// //               0  1  2  3  4  5  6  7  8 
// const numeros = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// // ... rest operator (pegar o resto), ... spread operator (distribuir algo)
// const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumero, terceiroNumero);
// console.log(resto);


//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5 ,6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);
