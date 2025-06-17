// JEITO QUE EU FIZ

// function getDayWeekText(dayWeek) {
//   let dayWeekText;
//   switch (dayWeek) {
//     case 0:
//       dayWeekText = "Domingo";
//       return dayWeekText;
//     case 1:
//       dayWeekText = "Segunda-Feira";
//       return dayWeekText;
//     case 2:
//       dayWeekText = "Terça-Feira";
//       return dayWeekText;
//     case 3:
//       dayWeekText = "Quarta-Feira";
//       return dayWeekText;
//     case 4:
//       dayWeekText = "Quinta-Feira";
//       return dayWeekText;
//     case 5:
//       dayWeekText = "Sexta-Feira";
//       return dayWeekText;
//     case 6:
//       dayWeekText = "Sábado";
//       return dayWeekText;
//     default:
//       dayWeekText = " Dia inválido";
//   }
// }
// function getMonthText(monthYear) {
//   let monthYearText;
//   switch (monthYear) {
//     case 0:
//       monthYearText = "Janeiro";
//       return monthYearText;
//     case 1:
//       monthYearText = "Fevereiro";
//       return monthYearText;
//     case 2:
//       monthYearText = "Março";
//       return monthYearText;
//     case 3:
//       monthYearText = "Abril";
//       return monthYearText;
//     case 4:
//       monthYearText = "Maio";
//       return monthYearText;
//     case 5:
//       monthYearText = "Junho";
//       return monthYearText;
//     case 6:
//       monthYearText = "Julho";
//       return monthYearText;
//     case 7:
//       monthYearText = "Agosto";
//       return monthYearText;
//     case 8:
//       monthYearText = "Setembro";
//       return monthYearText;
//     case 9:
//       monthYearText = "Outubro";
//       return monthYearText;
//     case 10:
//       monthYearText = "Novembro";
//       return monthYearText;
//     case 11:
//       monthYearText = "Dezembro";
//       return monthYearText;
//     default:
//       monthYearText = " Mês inválido";
//   }
// }
// function zeroAdapt(num) {
//   return num >= 10 ? num : `0${num}`;
// }
// const data = new Date();
// let dayWeek = data.getDay();
// let dayWeekText = getDayWeekText(dayWeek);
// let day = data.getDate();
// let monthYear = data.getMonth();
// let monthText = getMonthText(monthYear);
// let year = data.getFullYear();
// let hours = data.getHours();
// let minutes = data.getMinutes();
// let minutesFormat = zeroAdapt(minutes);
// let fullText =  `${dayWeekText}, ${day} de ${monthText} de ${year} ${hours}:${minutesFormat} `;
// document.querySelector(".container h1").textContent = fullText;
// console.log(
//   `${dayWeekText}, ${day} de ${monthText} de ${year} ${hours}:${minutesFormat} `
// );

// JEITO DO PROF (claramente bem mais simples)

const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toLocaleString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
});
