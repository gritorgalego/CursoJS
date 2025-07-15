// Continue continua para a próxima iteração do loop
// Break interrompe o loop

const numeros = [1, 2, 3, 4, 5, 6, 2, 7, 10, 11, 12];

let i = 0;
while (i < numeros.length) {
  let numero = numeros[i];
  if (numero === 2) {
    console.log("Número 2 encontrado, pulando...");
    i++;
    continue;
  }

  if (numero === 5) {
    console.log("Número 5 encontrado, pulando...");
    i++;
    continue;
  }
  console.log(numero);
  if (numero === 7) {
    console.log("Número 7 encontrado, saindo do loop...");
    i++;
    break;
  }
  i++;
}
