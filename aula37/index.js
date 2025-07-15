// let i = 5;
// console.log("Início do loop");
// while(i > 0){
//     console.log(i);
//     i--;
// }

// console.log("Fim do loop");

//Código para gerar um número aleatório entre 1 e 10
//Math.random() retorna um número aleatório entre 0 e 1
//Math.floor() arredonda o número para baixo


function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

//Faz verificação antes de entrar no loop

while (rand !== 16) {
    rand = random(min, max);
    console.log(rand);
};

//Entra no loop e executa pelo menos uma vez (nesse caso ele gera um número aleatório, mostra e depois verifica se é 16)

do
{
    rand = random(min, max);
    console.log(rand);
} while (rand !=16);