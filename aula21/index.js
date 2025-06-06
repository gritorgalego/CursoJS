// Operadores de comparação
/*
> maior que 
>= maior que ou igual a 
< menor que
<= menor que ou igual a
=== igualdade estrita (valor e tipo)
!== diferença estrita (valor e tipo)
*/
//console.log(10 > 5); // true

//Operadores Lógicos
/* 
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/
const expressaoAnd = true && true && true && true;
const expressaoOr = true || false || false;
const expressaoNot = !false;
console.log(expressaoAnd);
console.log(expressaoOr);
console.log(expressaoNot);

const usuario = "Vitor";
const senha = "123456";

const vaiLogar = usuario === "Vitor" && senha === "123456";
console.log(vaiLogar); // true