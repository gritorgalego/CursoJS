// // const tresHoras = 60  * 60 * 3 * 1000;
// // const umDia = 60 * 60 * 24 * 1000;
// // const data = new Date(0 + tresHoras + umDia); // Milissegundos desde 1 de janeiro de 1970, Timestamp Unix
// //const data = new Date(2004, 5, 16, 4, 30, 20); // Ano, Mês (0-11), Dia, Hora, Minuto, Segundo
// //console.log(data.toString());
// const data = new Date('2004-06-16 20:45:10');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // Mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minuto', data.getMinutes());
// console.log('Segundo', data.getSeconds());
// console.log('Dia da semana', data.getDay()); // Dia da semana 0 = Domingo e 6 = sábado
// console.log(Date.now('2004-06-16 20:45:10'));

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  return `Data de hoje: ${dia}/${mes}/${ano}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
