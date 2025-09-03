// IIFE -> Immediately Invoked Function Expression

// Descobri que isso meio que foi deixado de lado, mas não deixa de ser interessante saber que existe.

(function (idade, peso, altura) {
  const sobrenome = "Galego";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Vitor"));
  }

  falaNome();
  console.log(`Idade: ${idade} Peso: ${peso} Altura: ${altura}`);
})(21, 92, 1.92);

(function(){

})();
