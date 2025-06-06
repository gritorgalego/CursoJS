/*
&& -> false  && true -> false "retorna o primeiro valor falso, se todos forem verdadeiros, retorna o último"
// || -> true || false -> true "retorna o primeiro valor verdadeiro, se todos forem falsos, retorna o último"
FALSY VALUES:
false, 0, "", '', ``, null, undefined, NaN
TRUTHY VALUES:
true, 1, " ", [], {}, Infinity, -Infinity
*/
// function falaOi(){
//     return 'Oi';
// }
// const vaiExecutar = 'Nesse caso vai executar, já que esse valor é considerado truthy';
// console.log(vaiExecutar && falaOi());
// console.log(0 || false || null || 'Vitor Galego' || true );

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(typeof(a || b || c || d || e));