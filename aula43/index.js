function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    horas: "2-digit",
    minutos: "2-digit",
    segundos: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora();
  console.log(`Hora atual: ${hora}`);
} catch (err) {
  // Tratar erro
  console.log(err);
} finally{
    console.log('Tenha um bom dia!');
}
// try {
//   // É executada quando não há erros
//   console.log("Abri um arquivo");
//   console.log("Manipulei o arquivo e gerou erro");
//   console.log("Fechei o arquivo");

//   try {
//     console.log(b);
//   } catch (err){
//     console.log('Deu erro');
//   } finally{
//     console.log('Também sou finally');
//   }

// } catch (err) {
//   // É executada quando há erros
//   console.log("Tratando erro");
// } finally {
//   // É executada sempre, independentemente de erros
//   console.log("FINALLY: Eu sempre sou executado");
// }
