// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// i = index
//            Minha versão
// for (let i = 0; i <= 50; i+=3) {
//     const par = i % 2 === 0 ;
//     if(par){
//         console.log(`O número ${i} é par!`);
//     }
//     else{
//         console.log(`O número ${i} é ímpar!`);
//     }
// }
//            Versão do professor

// for (let i = 0 ; i <= 50; i++){
//     const par = i % 2 === 0 ? 'par' : 'ímpar';
//     console.log(i, par);
// }

const frutas = ['Maca', 'Pera', 'Uva', 'Abacaxi', 'Melancia'];

for (let i = 0 ; i < frutas.length; i++){
    console.log(`Índice ${i} = ${frutas[i]}`);
}