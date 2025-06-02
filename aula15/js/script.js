const numero = Number(prompt('Digite um número:'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> A raiz quadrada do seu número é igual a: ${Math.sqrt(numero)} <br></p>
<p> ${numero} é inteiro: ${Number.isInteger(numero)}<br></p>
<p> É NaN: ${Number.isNaN(numero)} <br></p>
<p> Arredondando para baixo: ${Math.floor(numero)} <br></p>
<p> Arredondando para cima: ${Math.ceil(numero)} <br></p>
<p> Com duas casas decimais: ${numero.toFixed(2)}</p>`;