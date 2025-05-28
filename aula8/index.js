/*
'nome', 'sobrenome', tem 'idade' anos, pesa 'peso' kg, tem 'alturaEmM' de altura e seu IMC é de 'indiceMassaCorporal'
'nome' nasceu em 'anoNascimento'
*/

const anoAtual = 2025;
const nome = 'Vitor';
const sobrenome = 'Galego';
const idade = 21;
const peso = 92;
const alturaEmM = 1.92;
let indiceMassaCorporal; // peso / (altura * altura);
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM  * alturaEmM);
anoNascimento = anoAtual - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura, seu IMC (Índice de massa corporal) é de ${indiceMassaCorporal}.`);
console.log(`${nome} nasceu em ${anoNascimento}`);